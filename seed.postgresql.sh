#!/usr/bin/env bash
# write your curl iteration here:

# set -B
for i in {1..13}
	# echo ${name}
do
  curl -H 'accept: */*' \
  -H 'Content-Type: application/json' \
	'http://localhost:3000/api/webapi/create' \
  -d '{"name":"Ronald'$i'o","age": '$((i+23))',"type":"pro" }'
done
#2d31f790-d08f-428a-8068-770ffec1c867