#!/usr/bin/env bash

set -uo pipefail

echo "Iniciando Appium..."
appium --log appium.log &
APPIUM_PID=$!

echo "Aguardando Appium ficar disponivel..."
READY=0

for i in {1..30}; do
  if curl --silent --fail http://127.0.0.1:4723/status > /dev/null; then
    READY=1
    break
  fi
  sleep 2
done

if [ "$READY" -eq 1 ]; then
  echo "Executando testes..."
  npx wdio run ./wdio.conf.js
  TEST_EXIT_CODE=$?
else
  echo "Erro: Appium nao iniciou."
  TEST_EXIT_CODE=1
fi

echo "Encerrando Appium..."
kill "$APPIUM_PID" 2>/dev/null || true
wait "$APPIUM_PID" 2>/dev/null || true

exit "$TEST_EXIT_CODE"