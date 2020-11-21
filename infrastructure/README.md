# FrontEnd infrastructure manual setup
## fetch domain
### [fetch domain](https://qiita.com/NaokiIshimura/items/89e104dd2d8dd950780e)
Do not use email to verify.
Do not delete the HostedZone created by Route53 Registrar.

## [create S3 & CloudFront](https://qiita.com/NaokiIshimura/items/46994e67b712831c3016)
### creat a bucket
- create a bucket
  - Block public access
    - Block all public access: Off
       - Block public access to buckets and objects granted through new public bucket or access point policies: On
- static hosting
  - Static website hosting: Disabled
- Bucket Versioning
  - Bucket Versioning: Enabled
- upload resources by `./s3-upload.sh`

### create a dictribution
- create distribution
  - Origin Domain Name: <bucket>.s3-ap-northeast-1.amazonaws.com

### edit Route 53
- Create hosted zone
  - Domain name: hoge
  - Type: Public hosted zone
- Create record > Simple Routing > Define simple record
  - Record name: www.hoge
  - Value/Route traffic to
    - Alias to CloudFront distribution
    - N. Virginia
    - CloudFront Domain Name
  - Record type: A

### edit CloudFront
- Edit Distribution
  - Alternate Domain Names (CNAMEs): www.hoge
  - SSL Certificate: Custom SSL Certificate
    - Request or Import a Certificate with ACM
    - Domain name: www.tokyomap-test.live
    - Select validation method: DNS validation
    - Validation: Create record in Route 53
  - SSL Certificate: Custom SSL Certificate
    - Custom SSL Certificate: www.tokyomap-test.live (hoge)
- wait for a while
- Edit Origin
  - Restrict Bucket Access: Yes
  - Origin Access Identity: Create a New Identity
  - Grant Read Permissions on Bucket: Yes
- Edit Behavior
- Viewer Protocol Policy: HTTPS Only
- Restrict Bucket Access: Yes...