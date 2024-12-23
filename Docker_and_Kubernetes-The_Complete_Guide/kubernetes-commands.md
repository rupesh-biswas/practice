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
