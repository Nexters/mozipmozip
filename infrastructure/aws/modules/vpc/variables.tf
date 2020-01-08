variable "name" {
  description = "모듈에서 정의하는 모든 리소스 이름의 prefix"
  type        = string
}

variable "cidr" {
  description = "VPC에 할당한 CIDR block"
  type        = string
}

variable "public_subnets" {
  description = "Public Subnet IP 리스트"
  type        = list(string)
}

variable "private_subnets" {
  description = "Private Subnet IP 리스트"
  type        = list(string)
}

variable "database_subnets" {
  description = "Database Subnet IP 리스트"
  type        = list(string)
}

variable "availability_zones" {
  description = "사용할 availability zones 리스트"
  type        = list(string)
}

variable "bastion_id" {
  description = "bastion instance id"
  type        = string
}

variable "nat_gateway_enable" {
  description = "nat gateway enabled"
  default = false
}

variable "tags" {
  description = "모든 리소스에 추가되는 tag 맵"
  type        = map(string)
}
