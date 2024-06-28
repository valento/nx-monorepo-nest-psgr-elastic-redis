#!/usr/bin/env bash
# write your curl iteration here:

# set -B
for i in {1..13}
	# echo ${name}
do
  curl -H 'accept: */*' \
  -H 'Content-Type: application/json' \
	'http://localhost:3005/api/webapi/create' \
  -d '{"name":"Tester'$i'o","age": '$((i+21))',"type":"expert" }'
done