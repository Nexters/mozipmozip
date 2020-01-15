module "eks-cluster" {
  source = "../../modules/eks-cluster"

  cluster_name = var.cluster_name
  cluster_vpc_id = var.cluster_vpc_id
  cluster_enable_logging = var.cluster_enable_logging
  cluster_logging_retention_in_days = var.cluster_logging_retention_in_days

  allow_ingress_cidr_blocks = var.allow_ingress_cidr_blocks

  availability_zones = var.availability_zones

  public_subnet_cidr_blocks = var.public_subnet_cidr_blocks
  private_subnet_cidr_blocks = var.private_subnet_cidr_blocks

  node_group_disk_size = var.node_group_disk_size
  node_group_ami_type = var.node_group_ami_type

  nat_gateway_id = var.nat_gateway_id
  internet_gateway_id = var.intenet_gateway_id

  ec2_ssh_key = var.ec2_ssh_key

  node_group_desired_size = var.node_group_desired_size
  node_group_min_size = var.node_group_min_size
  node_group_max_size = var.node_group_max_size

  endpoint_private_access = var.endpoint_private_access
  endpoint_public_access = var.endpoint_public_access

  tags = var.tags
}
