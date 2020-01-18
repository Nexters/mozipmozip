# Getting Started

### Code Convention

- IntelliJ lint에 의해 체크되는 경우 수정한다. (별도의 lint는 귀찮으니까 넣지 말자)

- 핵심 로직은 반드시 테스트 코드를 작성해 동작 여부를 확인한다.

- 한 메서드에 오직 한 단계의 들여쓰기만 한다.

- Lombok의 `@Data`는 최대한 사용하지 않는다.

- Build가 실패한 경우 절대 `develop`, `master`에 머지할 수 없다.

### Commit Message Conventions

커밋 시 아래 규칙을 참고해 메세지를 작성하자, 영어로 작성할 필요는 없다.

```bash
[#{issue-number}] feat (feature)
[#{issue-number}] fix (bug fix)
[#{issue-number}] refactor (split package)
[#{issue-number}] docs (documentation)
[#{issue-number}] style (formatting, missing semi colons, …)
[#{issue-number}] test (when adding missing tests)
```

[Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

### Github branching 

- server

서버 개발자의 경우 위 브랜치에서 feature 브랜치를 생성한다.

- client

프론트 개발자의 경우 위 브랜치에서 feature 브랜치를 생성한다.

`feature/issue-number` -> `server or client` -> `develop` -> `master`

### Project structure 

`mozip-client` `mozip-api`, `mozip-domain` 모듈로 구성되어 있다.

- `mozip-client`

프론트 프로젝트, React + typescript로 구성되어 있다.

- `mozip-api`

외부에 노출되는 api가 제공되는 모듈, `mozip-domain` 모듈 의존성을 가진다.

- `mozip-domain`

JPA 의존성을 가지며 Domain, Repository, Service 레이어가 정의 되는 모델


### Infrastructure

`AWS`를 이용해 인프라를 구성한다.

![Aws network diagram](./images/AWS%20Network%20Diagram.png)

인프라는 Terraform 코드로 구성되어 있다.

- **AWS 계정 내에 VPC 생성**

```bash
$ cd infrastructure/aws/resources/vpc
$ terraform init
$ terraform apply -var-file=vpc.tfvars
```
- **AWS 계정 내에 EKS 클러스터 생성** 

```bash
$ cd infrastructure/aws/resources/eks
$ terraform init
$ terraform apply -var-file=eks.tfvars
```

Terraform resource는 /infrastructure/aws/resources 아래에, 생성에 사용한 module 코드는 아래 레파지토리에 위치되어 있다.

[Terraform module repository](https://github.com/tramyu/infrastructure-as-code-tramyu)

### CI / CD

`Github Action` 을 사용해 CI를 구성한다.

### Deploy

로컬에서 배포를 위해 아래 유틸들이 설치되어 있어야 한다.

- direnv
- docker
- docker-compose
- kubectl
- kustomize
- skaffold

그리고 kubectl 명령어 호출을 위해 아래 파일을 수정한다.

`~/.kube/config`

```bash
apiVersion: v1
clusters:
- cluster:
    certificate-authority-data: {문의}
    server: {문의}
  name: mozipmozip-k8s-cluster
contexts:
- context:
    cluster: mozipmozip-k8s-cluster
    namespace: prod-mozipmozip
    user: mozipmozip-k8s-cluster
  name: mozipmozip-k8s-cluster
current-context: mozipmozip-k8s-cluster
kind: Config
preferences: {}
users:
- name: mozipmozip-k8s-cluster
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1alpha1
      args:
      - --region
      - ap-northeast-2
      - eks
      - get-token
      - --cluster-name
      - mozipmozip-k8s-cluster
      command: aws
      env: null
```

```bash
$ $(aws ecr get-login --no-include-email --region ap-northeast-2)
$ ./gradlew clean :mozip-server:mozip-api:build
$ skaffold run
```

### Local environment setup guides

```bash
$ docker-compose up -d
```

### References
These additional references should also help you:

- [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
