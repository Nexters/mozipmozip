cluster_name = "mozipmozip-k8s-cluster"

cluster_vpc_id = "vpc-012b5ac812770f53c"

cluster_enable_logging = false

cluster_logging_retention_in_days = 7

allow_ingress_cidr_blocks = ["999.999.999.999/32"]

availability_zones = ["ap-northeast-2a", "ap-northeast-2c"]

private_subnet_cidr_blocks = ["10.77.7.0/24", "10.77.8.0/24"]
public_subnet_cidr_blocks = ["10.77.9.0/24", "10.77.10.0/24"]

node_group_disk_size = 20
node_group_ami_type = "AL2_x86_64"

nat_gateway_id = "i-006b3ee8c6bd4d746"
intenet_gateway_id = "igw-04b1bf2b9c3c047fe"

ec2_ssh_key = "kyunam-pem"

node_group_desired_size = 1
node_group_min_size = 1
node_group_max_size = 1

endpoint_private_access = true
endpoint_public_access = true

tags = {
  Name = "mozipmozip-k8s-cluster"
  Team = "365"
  Owner = "KyuNam"
}
