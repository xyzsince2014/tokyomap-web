#! /bin/bash
aws s3 sync ../public s3://tokyomap-live/ --exact-timestamps --delete --acl public-read