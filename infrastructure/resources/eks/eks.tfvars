cluster_name = ""

cluster_vpc_id = ""

cluster_enable_logging = false

cluster_logging_retention_in_days = 7

allow_ingress_cidr_blocks = ["0.0.0.0/24"]

availability_zones = ["ap-northeast-2a", "ap-northeast-2c"]

private_subnet_cidr_blocks = ["0.0.0.0/24", "0.0.0.0/24"]
public_subnet_cidr_blocks = ["0.0.0.0/24", "0.0.0.0/24"]

node_group_disk_size = 20
node_group_ami_type = "AL2_x86_64"

nat_gateway_id = ""
intenet_gateway_id = ""

ec2_ssh_key = ""

node_group_desired_size = 1
node_group_min_size = 1
node_group_max_size = 1

endpoint_private_access = true
endpoint_public_access = false

tags = {
  Name = ""
  Team = ""
  Owner = ""
}
