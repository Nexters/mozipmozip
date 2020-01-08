resource "aws_eks_node_group" "eks_cluster_node_group" {
  cluster_name = aws_eks_cluster.eks_cluster.name
  node_group_name = "${var.cluster_name}-node-group"
  node_role_arn = aws_iam_role.eks_node_group_iam_role.arn
  subnet_ids = aws_subnet.private.*.id
  disk_size = var.node_group_disk_size
  ami_type = var.node_group_ami_type

  tags = merge(var.tags, {
    "kubernetes.io/cluster/${var.cluster_name}" = "owned"
  })

  scaling_config {
    desired_size = var.node_group_desired_size
    min_size = var.node_group_min_size
    max_size = var.node_group_max_size
  }

  remote_access {
    ec2_ssh_key = var.ec2_ssh_key
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Node Group handling.
  # Otherwise, EKS will not be able to properly delete EC2 Instances and Elastic Network Interfaces.
  depends_on = [
    aws_iam_role_policy_attachment.node_group_AmazonEKSWorkerNodePolicy,
    aws_iam_role_policy_attachment.node_group_AmazonEKS_CNI_Policy,
    aws_iam_role_policy_attachment.node_group_AmazonEC2ContainerRegistryReadOnly
  ]
}
