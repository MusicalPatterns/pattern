#!/usr/bin/env bash

set -e

CHECK_TO_MAKE_SURE_I_AM_RUNNING_AS_PART_OF_ANOTHER_MODULE_S_INSTALL="../../../"

if [[ -d "${CHECK_TO_MAKE_SURE_I_AM_RUNNING_AS_PART_OF_ANOTHER_MODULE_S_INSTALL}node_modules" ]] ; then
	sh ./bin/share_config.sh
fi
