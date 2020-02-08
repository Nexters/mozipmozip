# 모집모집

모집 공고 관리를 위한 서비스

## :baby: Code Convention

- IntelliJ lint에 의해 체크되는 경우 수정한다. (별도의 lint는 귀찮으니까 넣지 말자)

- 핵심 로직은 반드시 테스트 코드를 작성해 동작 여부를 확인한다.

- 한 메서드에 오직 한 단계의 들여쓰기만 한다.

- Lombok의 `@Data`는 최대한 사용하지 않는다.

- Build가 실패한 경우 절대 `develop`, `master`에 머지할 수 없다.

## :facepunch: Commit Message Conventions

커밋 시 아래 규칙을 참고해 메세지를 작성하자, 영어로 작성할 필요는 없다.

`issue-number`는 Github의 issue를 발급하고, 생성된 번호를 사용한다.

```bash
[#{issue-number}] feat (feature)
[#{issue-number}] fix (bug fix)
[#{issue-number}] refactor (split package)
[#{issue-number}] docs (documentation)
[#{issue-number}] style (formatting, missing semi colons, …)
[#{issue-number}] test (when adding missing tests)
```

[Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)

## :pouting_cat: Github branching 

- `master`
- `develop`
- `feature/{issue-number}`

`feature/issue-number` -> `server or client` -> `develop` -> `master`

## :open_file_folder: Project structure 

- `mozip-client`

프론트 프로젝트, React + typescript로 구성되어 있다.

- `mozip-server`

서버 프로젝트, Java Spring Boot 2.xx 버전으로 구성되어 있다.

- `mozip-server/mozip-api`

외부에 노출되는 api가 제공되는 모듈, `mozip-domain` 모듈 의존성을 가진다.

- `mozip-server/mozip-domain`

JPA 의존성을 가지며 Domain, Repository, Service 레이어가 정의 되는 모델


## :space_invader: Infrastructure

`AWS`를 이용해 인프라를 구성한다.

`AWS Ecs` 와 `AWS Fargate`를 이용해 배포한다.

> 아래 내용은 초기에 사용했던 내용으로, 지금은 사용하지 않는다.

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

## :roller_coaster: CI / CD

`Github Action` 을 사용해 CI/CD를 구성한다.

`develop` `master` 브랜치에 PR을 날린 뒤 커밋, 푸시가 발생하면 CI/CD가 돌면서 운영 리소스에 배포가 된다.

[모집모집 운영 주소](http://mozipmozip.com)

## :airplane: Deploy

CI/CD를 이용해 배포한다.

> 아래 내용은 초기에 사용했던 내용으로, 지금은 사용하지 않는다.

로컬에서 배포를 위해 아래 유틸들이 설치되어 있어야 한다.

- `direnv`
- `docker`
- `docker-compose`
- `kubectl`
- `kustomize`
- `skaffold`

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

위 설정이 완료되고 난 후 아래 명령어를 통해 AWS에 배포할 수 있다.

```bash
$ $(aws ecr get-login --no-include-email --region ap-northeast-2)
$ ./gradlew clean :mozip-server:mozip-api:build
$ skaffold run
```

## :whale: Local environment setup guides

`local` profile에서 MySQL을 사용하기 때문에 Spring Boot 어플리케이션 실행 전 아래 명령어를 실행한다.

```bash
$ docker-compose up -d
```

## :baby_chick: References
These additional references should also help you:

- [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
