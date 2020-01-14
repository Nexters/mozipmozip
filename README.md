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

Git-flow는 너무 복잡하니까.. 간단하게 아래 세 가지를 사용하자

`feature/issue-number` -> `develop` -> `master`

### Project structure 

`mozip-api`, `mozip-domain` 모듈로 구성되어 있다.

- `mozip-api`

외부에 노출되는 api가 제공되는 모듈, `mozip-domain` 모듈 의존성을 가진다.

- `mozip-domain`

도메인 모델, JPA 의존성을 가지며 Domain, Repository, Service 레이어가 정의 되는 모델


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

`Github Action` 을 사용해 CI/CD를 구성한다.

### Deploy

```bash
$
```

### Setup Guides

```bash
$ docker-compose up -d
```

### References
These additional references should also help you:

- [Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
