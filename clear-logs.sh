#! /bin/bash
rm -rf ./web/logs/index/access.log
rm -rf ./web/logs/index/error.log
rm -rf ./web/logs/api/access.log
rm -rf ./web/logs/api/error.log
rm -rf ./web/logs/socket/access.log
rm -rf ./web/logs/socket/error.log

touch ./web/logs/index/access.log
touch ./web/logs/index/error.log
touch ./web/logs/api/access.log
touch ./web/logs/api/error.log
touch ./web/logs/socket/access.log
touch ./web/logs/socket/error.log
