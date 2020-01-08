variable "cluster_name" {
  description = "eks 클러스터 이름"
  type = string
}

variable "cluster_vpc_id" {
  description = "eks 클러스터가 사용할 vpc id"
  type = string
}

variable "cluster_enable_logging" {
  description = "cloudwatch control plane 로깅 설정 활성화 여부"
  default = false
  type = string
}

variable "cluster_logging_retention_in_days" {
  description = "log retention"
  default = 7
  type = number
}

variable "allow_ingress_cidr_blocks" {
  description = "allow ingress cidr blocks"
  type = list(string)
  default = []
}

variable "availability_zones" {
  description = "availability_zones"
  type = list(string)
}

variable "private_subnet_cidr_blocks" {
  description = "private subnet cidr blocks"
  type = list(string)
  default = []
}

variable "public_subnet_cidr_blocks" {
  description = "public subnet cidr blocks"
  type = list(string)
  default = []
}

variable "node_group_disk_size" {
  description = "worker node disk size"
  type = number
  default = 20
}

variable "node_group_ami_type" {
  description = "worker node ami type"
  type = string
  # Non gpu instance
  default = "AL2_x86_64"
}

variable "nat_gateway_id" {
  description = "nat gateway or nat instance id"
  type = string
}

variable "internet_gateway_id" {
  description = "internet gateway id"
  type = string
}

variable "ec2_ssh_key" {
  description = "node group ec2 ssh key"
  type = string
}

variable "node_group_desired_size" {
  description = "node group desired size"
  type = number
  default = 1
}
variable "node_group_min_size" {
  description = "node group min size"
  type = number
  default = 1
}
variable "node_group_max_size" {
  description = "node group max size"
  type = number
  default = 1
}

variable "endpoint_private_access" {
  description = "cluster private access"
  default = true
}

variable "endpoint_public_access" {
  description = "cluster public access"
  default = false
}

variable "tags" {
  description = "eks cluster tags"
  type = map(string)
  default = {}
}
