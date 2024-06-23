#!/usr/bin/env bash
# write your curl iteration here:

# set -B
for i in {1..10}
	# echo ${name}
do
  curl -H 'accept: */*' \
  -H 'Content-Type: application/json' \
	'http://localhost:3000/api/tenant/create' \
  -d '{"name":"Tester '$i'" }'
done
#2d31f790-d08f-428a-8068-770ffec1c867