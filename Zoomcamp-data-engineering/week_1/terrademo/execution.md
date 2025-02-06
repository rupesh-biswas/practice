# Steps to run terraform

## Refresh service-account's auth-token for this session

gcloud auth application-default login

## Initialize state file (.tfstate)

terraform init

## Auto apply or destroy

terraform apply -auto-approve

terraform destroy -auto-approve
