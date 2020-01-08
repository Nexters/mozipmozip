resource "aws_cloudwatch_log_group" "eks_cloudwatch_log_group" {
  # true인 경우 생성, false인 경우 생성하지 않음
  count = var.cluster_enable_logging ? 1: 0
  name              = "/aws/eks/${var.cluster_name}/cluster"
  retention_in_days = var.cluster_logging_retention_in_days
  tags              = var.tags
  #  kms_key_id        = 암호화 관련된 설정, 이후 살펴볼 것
}
