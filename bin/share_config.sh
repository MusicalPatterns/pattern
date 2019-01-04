#!/usr/bin/env bash

ESCAPE_CLI_PATTERN_DIRECTORY_IN_PARENT_S_NODE_MODULES="../../../"

share_file() {
	FILE="$1"
	cp ${FILE} ${ESCAPE_CLI_PATTERN_DIRECTORY_IN_PARENT_S_NODE_MODULES}${FILE}
}

mkdir -p ${ESCAPE_CLI_PATTERN_DIRECTORY_IN_PARENT_S_NODE_MODULES}test

share_file Makefile.snapshot
share_file test/snapshot.test.ts
