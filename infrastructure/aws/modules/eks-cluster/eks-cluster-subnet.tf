# public subnet
resource "aws_subnet" "public" {
  count = length(var.public_subnet_cidr_blocks)

  vpc_id = data.aws_vpc.cluster_vpc.id
  cidr_block = var.public_subnet_cidr_blocks[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(var.tags, {
    "Name" = format("eks-public-subnet-%s", var.availability_zones[count.index]),
    "kubernetes.io/cluster/${var.cluster_name}" = "shared",
    "kubernetes.io/role/elb" = "1",
    "SubnetType" = "Utility"
  })
}

# private subnet
resource "aws_subnet" "private" {
  count = length(var.private_subnet_cidr_blocks)

  vpc_id = data.aws_vpc.cluster_vpc.id
  cidr_block = var.private_subnet_cidr_blocks[count.index]
  availability_zone = var.availability_zones[count.index]

  tags = merge(
  var.tags,
  {
    "Name" = format("eks-private-subnet-%s", var.availability_zones[count.index]),
    "kubernetes.io/cluster/${var.cluster_name}" = "shared"
    "kubernetes.io/role/internal_elb" = "1",
    "SubnetType" = "Private"
  },
  )
}

# public route table
resource "aws_route_table" "public" {
  vpc_id = var.cluster_vpc_id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = var.internet_gateway_id
  }

  tags = merge(
  var.tags,
  {
    "Name" = "eks-public-subnet-route-table"
  },
  )
}

# private route table
# nat instance 인바운드에 해당 프라이빗 서브넷 cidr 추가되었는지 확인 필요
resource "aws_route_table" "private" {
  vpc_id = var.cluster_vpc_id

  route {
    cidr_block = "0.0.0.0/0"

    # nat_gateway_id = "${aws_nat_gateway.this.*.id[count.index]}"
    instance_id = var.nat_gateway_id

  }

  tags = merge(var.tags, {
    "Name" = "eks-private-subnet-route-table"
  })
}

# route table association
resource "aws_route_table_association" "public" {
  count = length(var.public_subnet_cidr_blocks)

  subnet_id = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

resource "aws_route_table_association" "private" {
  count = length(var.private_subnet_cidr_blocks)

  subnet_id = aws_subnet.private[count.index].id
  route_table_id = aws_route_table.private.id
}

data "aws_vpc" "cluster_vpc" {
  id = var.cluster_vpc_id
}
