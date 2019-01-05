#!/usr/bin/env bash

set -e

echo "a"
. ../../../node_modules/@musical-patterns/cli/bin/non_cli/share_file.sh
echo "b"
share_file Makefile.snapshot
echo "c"
share_file test/snapshot.test.ts
echo "d"
