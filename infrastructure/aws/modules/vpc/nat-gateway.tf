# EIP for NAT gateway
resource "aws_eip" "nat" {
  count = var.nat_gateway_enable ? length(var.availability_zones) : 0
  vpc = true
}

# NAT gateway
resource "aws_nat_gateway" "this" {
  count = var.nat_gateway_enable ? length(var.availability_zones) : 0
  allocation_id = aws_eip.nat.*.id[count.index]
  subnet_id = aws_subnet.public.*.id[count.index]
}

# private route table
resource "aws_route_table" "nat_gateway_private" {
  count = var.nat_gateway_enable ? length(var.availability_zones) : 0

  vpc_id = aws_vpc.this.id

  route {
    cidr_block = "0.0.0.0/0"

    nat_gateway_id = aws_nat_gateway.this.*.id[count.index]
  }

  tags = merge(var.tags, {
    "Name" = format("%s-private-%s", var.name, var.availability_zones[count.index])
  })
}
