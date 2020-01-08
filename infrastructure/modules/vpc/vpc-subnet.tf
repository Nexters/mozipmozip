# public subnet
resource "aws_subnet" "public" {
  count = length(var.public_subnets)

  vpc_id = aws_vpc.this.id
  cidr_block = var.public_subnets[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    "Name" = format("%s-public-%s", var.name, var.availability_zones[count.index]),
  })
}

# private subnet
resource "aws_subnet" "private" {
  count = length(var.private_subnets)

  vpc_id = aws_vpc.this.id
  cidr_block = var.private_subnets[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    "Name" = format("%s-private-%s", var.name, var.availability_zones[count.index]),
  })
}

# private database subnet
resource "aws_subnet" "database" {
  count = length(var.database_subnets)

  vpc_id = aws_vpc.this.id
  cidr_block = var.database_subnets[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    "Name" = format("%s-db-%s", var.name, var.availability_zones[count.index])
  })
}

resource "aws_db_subnet_group" "database" {
  count = length(var.database_subnets) > 0 ? 1 : 0

  name = var.name
  description = "Database subnet group for ${var.name}"
  subnet_ids = aws_subnet.database.*.id

  tags = merge(var.tags, {
    "Name" = format("%s", var.name)
  })
}

# public route table
resource "aws_route_table" "public" {
  vpc_id = aws_vpc.this.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.this.id
  }

  tags = merge(var.tags, {
    "Name" = format("%s-public", var.name)
  })
}

# private route table
resource "aws_route_table" "private" {
  count = var.nat_gateway_enable ? 0 : length(var.availability_zones)

  vpc_id = aws_vpc.this.id

  route {
    cidr_block = "0.0.0.0/0"
    instance_id = var.bastion_id
  }

  tags = merge(var.tags, {
    "Name" = format("%s-private-%s", var.name, var.availability_zones[count.index])
  })
}

# route table association
resource "aws_route_table_association" "public" {
  count = length(var.public_subnets)

  subnet_id = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private" {
  count = length(var.private_subnets)

  subnet_id = aws_subnet.private[count.index].id
  route_table_id = var.nat_gateway_enable ? aws_route_table.nat_gateway_private[count.index].id :aws_route_table.private[count.index].id
}

resource "aws_route_table_association" "database" {
  count = length(var.database_subnets)

  subnet_id = aws_subnet.database[count.index].id
  route_table_id = var.nat_gateway_enable ? aws_route_table.nat_gateway_private[count.index].id :aws_route_table.private[count.index].id
}

