# VPC
output "bastion_id" {
  description = "BASTION ID"
  value       = aws_instance.bastion.id
}

