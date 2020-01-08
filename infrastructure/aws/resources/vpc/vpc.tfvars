name = ""

# Vpc cidr block
cidr = "0.0.0.0/16"

availability_zones = ["ap-northeast-2a", "ap-northeast-2c"]

# Public subnet cidr block
public_subnets = ["0.0.0.0/24", "0.0.0.0/24"]

# Private subnet cidr block
private_subnets = ["0.0.0.0/24", "0.0.0.0/24"]

# DB subnet cidr block
database_subnets = ["0.0.0.0/24", "0.0.0.0/24"]

tags = {
  "TerraformManaged" = "true"
  "Creator"          = "KimKyuNam"
}

ec2_ssh_key = ""

ingress_cidr_blocks = ["0.0.0.0/24"]

nat_gateway_enable = false

bastion_name = ""
