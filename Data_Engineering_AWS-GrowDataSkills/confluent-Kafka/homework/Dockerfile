# Use a Python image with uv pre-installed
FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN uv pip install --system -r requirements.txt

# Copy the application code into the container
COPY . .

# Expose the port (if needed for debugging or monitoring)
EXPOSE 9092
