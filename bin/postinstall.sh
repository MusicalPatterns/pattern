#!/usr/bin/env bash

. ../../../node_modules/@musical-patterns/cli/bin/non_cli/run_only_if_not_self_installing.sh

run_only_if_not_self_installing "bash ./bin/share_config.sh"
