#!/usr/bin/env bash
set -e

echo "🚀 Starting Ollama server..."
OLLAMA_HOST=0.0.0.0 ollama serve &
pid=$!

until curl -s http://127.0.0.1:11434/api/tags | grep -q '"'; do
  echo "⏳ Waiting for Ollama to be ready..."
  sleep 1
done

echo "✅ Ollama ready — pulling llama3..."
ollama pull llama3

echo "🎉 Model downloaded. Releasing server..."
wait $pid
