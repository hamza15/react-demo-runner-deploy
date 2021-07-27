data "aws_eks_cluster" "cluster" {
  name = module.runner-deploy-demo.cluster_id
}

data "aws_eks_cluster_auth" "cluster" {
  name = module.runner-deploy-demo.cluster_id
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.cluster.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.cluster.certificate_authority.0.data)
  token                  = data.aws_eks_cluster_auth.cluster.token
  load_config_file       = false
  version                = "~> 1.9"
}

module "runner-deploy-demo" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "runner-deploy-demo"
  cluster_version = "1.17"
  subnets         = ["subnet-012d72cf94847302f", "subnet-01357abbac9a27f55", "subnet-0e298515c04632912"]
  vpc_id          = "vpc-043f6d87048339747"

  worker_groups = [
    {
      instance_type = "m4.large"
      asg_max_size  = 2
    }
  ]
}