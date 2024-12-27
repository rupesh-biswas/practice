# Kubernetes Handy Commands

## Apply

```bash
 kubectl apply -f .\client-pod.yaml
```

## Get status

Status of pods:

```bash
kubectl get pods
```

Status of services:

```bash
kubectl get services
```

## Get running deployments

```bash
kubectl get deployments
```

## Describe a deploy pod

Fet details of a deployed pod

```bash
 kubectl describe pod <pod_name>
```

e.g.

```bash
 kubectl describe pod client-pod
```

## Remove an object

To delete an kubernetes pod it is an imperative command rather than a declarative one

```bash
kubectl delete -f .\client-pod.yaml
```

## Imperative command to update image

```text
kubectl set image <object_type>/<object_name> <container_name>=<new_image_to_use>
```

e.g.:

```bash
kubectl set image deployment/client-deployment client=rupeshbiswas/multi-client:v5
```

## Apply all the configs present in a folder

```bash
kubectl apply -f k8s
```

## Get logs of a pod

```bash
kubectl logs postgres-deployment-6dcb4dcbb4-mjshz
```

## Creating a Secret

Imperative command to create secrets

"--from-literal" tells that we are literally providing the password in the command as key value instead of loading it from a file.

```bash
kubectl create secret generic <secret_name> --from-literal key=value
```

e.g.

```bash
kubectl create secret generic pgpassword --from-literal PGPASSWORD=something_secret
```

Look for secrets:

```bash
kubectl get secrets
```

## Gcloud

Set project:

```bash
gcloud config set project <project_id>
```

Set compute zone:

```bash
gcloud config set compute/zone <zone_location>
```

Get container credentials:

```bash
gcloud container clusters get-credentials <cluster name>
```
