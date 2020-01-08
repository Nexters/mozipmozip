# Allow worker node traffic
resource "aws_security_group" "eks_cluster_sg" {
  name        = "eks_cluster_sg"
  description = "Cluster communication with worker nodes"
  vpc_id      = var.cluster_vpc_id

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = var.tags
}

# OPTIONAL: Allow inbound traffic from your local workstation external IP
#           to the Kubernetes. You will need to replace A.B.C.D below with
#           your real IP. Services like icanhazip.com can help you find this.
resource "aws_security_group_rule" "cluster_ingress_cidr_https" {
  count = length(var.allow_ingress_cidr_blocks) > 0 ? 1 : 0
  # ex) "A.B.C.D/32"
  cidr_blocks       = var.allow_ingress_cidr_blocks
  description       = "Allow local to communicate with the cluster API Server"
  from_port         = 443
  protocol          = "tcp"
  security_group_id = aws_security_group.eks_cluster_sg.id
  to_port           = 443
  type              = "ingress"
}
