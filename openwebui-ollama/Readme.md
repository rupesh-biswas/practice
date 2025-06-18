# OpenWebUI Ollama

A powerful web UI for interacting with Llama models, running seamlessly with Docker and CUDA acceleration.

> **ℹ️ Note:**
>
> - For most users, WSL (Windows Subsystem for Linux) is recommended for best compatibility with Linux-based Docker images and GPU/CUDA support.
> - **However, if you are able to run Docker and this project successfully from Windows PowerShell (with GPU support enabled), WSL is not strictly required.**
> - Use the setup that works best for your environment.

---

## 🚀 Prerequisites

- **Update and Restart WSL (Windows Subsystem for Linux)**

  Make sure your WSL is up to date and set to version 2 for best compatibility with Docker and GPU support.

  **Update WSL:**

  ```sh
  wsl --update
  ```

  **Restart WSL:**

  ```sh
  wsl --shutdown
  ```

  **Set your default WSL version to 2:**

  ```sh
  wsl --set-default-version 2
  ```

  > **Note:** The above WSL commands (`wsl --update`, `wsl --shutdown`, and `wsl --set-default-version 2`) should be run from **PowerShell** (not from inside WSL itself).
  >
  > After running these commands, you can start WSL again by typing:
  >
  > ```powershell
  > wsl
  > ```
  >
  > in PowerShell.

  For more details, see the [WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/).

- **Latest CUDA Drivers**  
   Ensure your system has the latest CUDA drivers installed.  
   [CUDA Documentation](https://docs.nvidia.com/cuda/)

- **Docker & Docker Compose**  
   Install both Docker and Docker Compose.  
   [Docker Docs](https://docs.docker.com/) | [Docker Compose Docs](https://docs.docker.com/compose/)

- **Docker inside WSL**

  > **⚠️ Important:** Docker must be set up inside WSL. This works only in a Linux environment.  
  >  [Docker on WSL Guide](https://docs.docker.com/desktop/wsl/)

- **Llama Model Specs**  
   Check the [Llama model requirements](https://ollama.com/library/llama2) for supported specs.

- **Verify CUDA with Docker**  
   To confirm your GPU is accessible in Docker, run:

  ```sh
  docker run --rm --gpus all nvidia/cuda:12.9.0-base-ubuntu20.04 nvidia-smi
  ```

  You should see output similar to:

  ```text
  +-----------------------------------------------------------------------------------------+
  | NVIDIA-SMI 575.57.05              Driver Version: 576.57         CUDA Version: 12.9     |
  |-----------------------------------------+------------------------+----------------------+
  | GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
  | Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
  |                                         |                        |               MIG M. |
  |=========================================+========================+======================|
  |   0  NVIDIA GeForce RTX 3060 ...    On  |   00000000:01:00.0 Off |                  N/A |
  | N/A   55C    P8             10W /  115W |       0MiB /   6144MiB |      0%      Default |
  |                                         |                        |                  N/A |
  +-----------------------------------------+------------------------+----------------------+

  +-----------------------------------------------------------------------------------------+
  | Processes:                                                                              |
  |  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
  |        ID   ID                                                               Usage      |
  |=========================================================================================|
  |  No running processes found                                                             |
  +-----------------------------------------------------------------------------------------+
  ```

---

## 🛠️ Steps to Run

1. **Start the services:**

   ```sh
   docker compose up -d
   ```

   Everything should start nicely.

2. **Monitor Ollama logs:**

   ```sh
   docker logs -f ollama
   ```

   Ollama will start pulling the Llama model. Wait for it to complete (one-time activity).

3. **Access the Web UI:**  
   Open [http://localhost:3000](http://localhost:3000) in your browser to start using OpenWebUI.

---

## ⚡️ Note for Laptop Users

When running this project on a laptop, please ensure:

- Your laptop is plugged into a power source.
- Power saving mode is not enabled, or is configured so it does **not** disable or throttle the GPU.

This helps prevent unexpected slowdowns or issues related to GPU availability.

---

## 🖥️ Sample Output

Below is a sample output you may see when running `docker compose up --build`. This is provided for reference, and actual output may vary depending on your system and environment.

```sh
$ docker compose up --build
# Compose can now delegate builds to bake for better performance.
#  To do so, set COMPOSE_BAKE=true.
[+] Building 3.2s (11/11) FINISHED                                                                                  docker:default
 => [ollama internal] load build definition from dockerfile                                         0.1s
 => => transferring dockerfile: 238B                                                                0.0s
 => [ollama internal] load metadata for docker.io/ollama/ollama:latest                              0.1s
 => [ollama internal] load .dockerignore                                                           0.0s
 => => transferring context: 2B                                                                    0.0s
 => [ollama 1/4] FROM docker.io/ollama/ollama:latest@sha256:...                                    2.7s
 => => resolve docker.io/ollama/ollama:latest@sha256:...                                           2.7s
 => [ollama internal] load build context                                                           0.0s
 => => transferring context: 35B                                                                   0.0s
 => [ollama auth] ollama/ollama:pull token for registry-1.docker.io                                0.0s
 => CACHED [ollama 2/4] RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/* 0.0s
 => CACHED [ollama 3/4] COPY entrypoint.sh /entrypoint.sh                                          0.0s
 => CACHED [ollama 4/4] RUN chmod +x /entrypoint.sh                                                0.0s
 => [ollama] exporting to image                                                                    0.1s
 => => exporting layers                                                                            0.0s
 => => exporting manifest sha256:...                                                               0.0s
 => => exporting config sha256:...                                                                 0.0s
 => => exporting attestation manifest sha256:...                                                   0.0s
 => => exporting manifest list sha256:...                                                          0.0s
 => => naming to docker.io/library/my-ollama:latest                                                0.0s
 => => unpacking to docker.io/library/my-ollama:latest                                             0.0s
 => [ollama] resolving provenance for metadata file                                                0.0s
[+] Running 2/2
 ✔ ollama            Built                                                                        0.0s
 ✔ Container ollama  Recreated                                                                    0.3s
Attaching to ollama, open-webui

# --- Ollama server startup ---
ollama      | 🚀 Starting Ollama server...
ollama      | ⏳ Waiting for Ollama to be ready...
ollama      | ... (server config and environment variables)
ollama      | Listening on [::]:11434 (version 0.9.1)
ollama      | looking for compatible GPUs

# --- CUDA and GPU detection ---
open-webui  | CUDA is enabled, appending LD_LIBRARY_PATH to include torch/cudnn & cublas libraries.
ollama      | inference compute ... name="NVIDIA GeForce RTX 3060 Laptop GPU" total="6.0 GiB" available="5.0 GiB"

# --- Model download and server ready ---
ollama      | ✅ Ollama ready — pulling llama3...
ollama      | ... (model pulling and verification)
ollama      | success
ollama      | 🎉 Model downloaded. Releasing server...

# --- OpenWebUI startup ---
open-webui  | ... (environment and database info)
open-webui  | WARNING: CORS_ALLOW_ORIGIN IS SET TO '*' - NOT RECOMMENDED FOR PRODUCTION DEPLOYMENTS.
open-webui  | Embedding model set: sentence-transformers/all-MiniLM-L6-v2
open-webui  | ... (startup banner)
open-webui  | v0.6.15 - building the best AI user interface.
open-webui  | https://github.com/open-webui/open-webui
open-webui  | INFO:     Started server process [1]
open-webui  | INFO:     Waiting for application startup.
open-webui  | ... (external dependencies installation)
```

**Annotations:**

- Comments starting with `# ---` indicate major phases (build, server startup, GPU detection, model download, UI startup).
- Lines prefixed with `ollama      |` and `open-webui  |` are logs from the respective containers.
- Warnings and info messages are normal; pay attention to errors if any appear.
- Output will vary based on your hardware, Docker version, and environment.

---
