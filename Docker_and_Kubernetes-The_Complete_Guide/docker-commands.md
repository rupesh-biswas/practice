# Docker handy commands

## Get list of images

```bash
docker images
```

## Get list of running images and stopped

```bash
docker ps // running
docker ps -a // all
```

## Run a docker image

Run and see the logs

```bash
docker run <image_name_or_id>
```

Run it background with attaching to it

```bash
docker run -d <image_name_or_id>
```

e.g.

```bash
 docker run -d redis
```

## Stop a container

```bash
docker stop <container_id>
```

## Run shell in an image

```bash
docker run -it <image_name_or_id> sh
```

Attach to an existing running container and run shell

```bash
docker exec -it <container-id> sh
```

## Commit a changed image

```bash
docker commit -c "CMD '<start_command>'" <running_image_id>
```

Example

```bash
docker commit -c "CMD 'redis-server'" ca2c3af0cc26
```

Output

```plaintext
sha256:611be406511c84b4cab5f62062d26647fc66fde6f8c412d40b7e4b88fe22c556
```

Then run using

```bash
docker run 611be406511c84b4ca
```

## Container Port Mapping

To redirect traffic inside a container we need to map the ports

```bash
docker run -p <computer_port>:<container_port> <container_name_or_id>
```

e.g.

```bash
docker run -p 8080:8080 rupeshbiswas/simpleweb
```

Both the ports need not be same  
e.g. map system 5000 port to container 8080 port

```bash
docker run -p 5000:8080 rupeshbiswas/simpleweb
```

## Start multiple container using docker compose

When the docker compose file is created in the same director and proper naming is giving then the networking is also handled by docker compose.

- Note: For docker compose to work correctly the file location is important. It takes the context of folder where it is located and uses the docker file present in it.

```bash
docker-compose up
```

Start without attaching i.e. no logs required

```bash
docker-compose up -d
```

Rebuild flag is required when there are new changes in the code file:

```bash
docker-compose up --build
```

## Stop multiple container using docker compose

```bash
docker-compose down
```

## List running docker compose containers

- Note: All docker compose commands needs to be run in the same directory where the docker file is including the below

```bash
docker-compose ps
```