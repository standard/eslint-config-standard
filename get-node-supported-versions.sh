#!/usr/bin/env bash
set -euxo pipefail
url=https://raw.githubusercontent.com/nodejs/Release/master/schedule.json
release_schedule=$(curl -s $url)
today=$(date "+%Y-%m-%d")
active_versions=$(echo $release_schedule | jq -s "[ .[] | to_entries[] | select(.value.start <= \"$today\" and .value.end >= \"$today\") | .key[1:] ]")
echo $active_versions
