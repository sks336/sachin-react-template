#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
$SCRIPT_DIR/../run.sh -c clean -i install -s start
