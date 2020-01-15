name = "kyunam-mozipmozip-vpc"

# Vpc cidr block
cidr = "10.77.0.0/16"

availability_zones = ["ap-northeast-2a", "ap-northeast-2c"]

# Public subnet cidr block
public_subnets = ["10.77.1.0/24", "10.77.2.0/24"]

# Private subnet cidr block
private_subnets = ["10.77.3.0/24", "10.77.4.0/24"]

# DB subnet cidr block
database_subnets = ["10.77.5.0/24", "10.77.6.0/24"]

tags = {
  "TerraformManaged" = "true"
  "Creator"          = "KimKyuNam"
}

ec2_ssh_key = "kyunam-pem"

ingress_cidr_blocks = ["99.99.99.99/32"]

nat_gateway_enable = false

bastion_name = "kyunam"
