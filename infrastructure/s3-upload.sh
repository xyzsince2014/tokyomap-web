#! /bin/bash
aws cloudfront create-invalidation --distribution-id d3c17b7o3stmms.cloudfront.net --paths "/*"
aws s3 sync ../public s3://tokyomap --exact-timestamps --delete --exclude "report.html" --acl private
