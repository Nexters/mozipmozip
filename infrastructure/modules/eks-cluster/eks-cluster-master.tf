resource "aws_eks_cluster" "eks_cluster" {
  name     = var.cluster_name
  version = "1.14"
  role_arn = aws_iam_role.eks_cluster_iam_role.arn

  vpc_config {
    endpoint_private_access = var.endpoint_private_access
    endpoint_public_access = var.endpoint_public_access

    security_group_ids = [aws_security_group.eks_cluster_sg.id]
    # 클러스터의 리소스를 호스팅할 모든 서브넷을 지정, 노드 그룹용 프라이빗 서브넷과 로드 밸런서용 퍼블릭 서브넷
    subnet_ids = concat(aws_subnet.private.*.id, aws_subnet.public.*.id)
  }

  # Ensure that IAM Role permissions are created before and deleted after EKS Cluster handling.
  # Otherwise, EKS will not be able to properly delete EKS managed EC2 infrastructure such as Security Groups.
  depends_on = [
    aws_iam_role_policy_attachment.cluster_AmazonEKSClusterPolicy,
    aws_iam_role_policy_attachment.cluster_AmazonEKSServicePolicy,
    aws_cloudwatch_log_group.eks_cloudwatch_log_group
  ]

  tags = var.tags
}
