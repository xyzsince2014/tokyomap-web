#! /bin/bash
aws cloudformation create-stack --template-body ./s3-cloudfront-cfn.yml --stack-name tokyomap-live
