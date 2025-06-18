# OpenWebUI Ollama

A powerful web UI for interacting with Llama models, running seamlessly with Docker and CUDA acceleration.

> **ℹ️ Note:** For GPU support, this project requires a Linux environment (WSL). Docker with CUDA acceleration works only on Linux/WSL.

---

## 🚀 Prerequisites

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
