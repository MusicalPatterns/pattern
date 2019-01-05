#!/usr/bin/env bash

. ../../../node_modules/@musical-patterns/cli/bin/non_cli/run_only_if_not_self_installing.sh
if [[ $? == 0 ]] ; then
	echo "made it in here"
	run_only_if_not_self_installing "bash ./bin/share_config.sh"
else
	echo "not really sure what to do here honestly"
fi
