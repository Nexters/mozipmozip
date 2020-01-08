# VPC
resource "aws_vpc" "this" {
  cidr_block = var.cidr
  enable_dns_hostnames = true
  enable_dns_support = true
  instance_tenancy = "default"

  tags = merge(var.tags, {
    "Name" = format("%s", var.name)
  })
}

# internet gateway
resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id

  tags = merge(var.tags, {
    "Name" = format("%s", var.name)
  })
}

# default network ACL
resource "aws_default_network_acl" "dev_default" {
  default_network_acl_id = aws_vpc.this.default_network_acl_id

  ingress {
    protocol = -1
    rule_no = 100
    action = "allow"
    cidr_block = "0.0.0.0/0"
    from_port = 0
    to_port = 0
  }

  egress {
    protocol = -1
    rule_no = 100
    action = "allow"
    cidr_block = "0.0.0.0/0"
    from_port = 0
    to_port = 0
  }

  subnet_ids = concat(
  aws_subnet.public.*.id,
  aws_subnet.private.*.id,
  aws_subnet.database.*.id)

  tags = merge(var.tags, {
    "Name" = format("%s-default", var.name)
  })
}

# default security group
resource "aws_default_security_group" "dev_default" {
  vpc_id = aws_vpc.this.id

  ingress {
    protocol = -1
    self = true
    from_port = 0
    to_port = 0
  }

  egress {
    from_port = 0
    to_port = 0
    protocol = "-1"
    cidr_blocks = [
      "0.0.0.0/0"
    ]
  }

  tags = merge(var.tags, {
    "Name" = format("%s-default", var.name)
  })
}
