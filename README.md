#aws-serverless:

nvm use 8.11.1

npm install -g aws-cli serverless


curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"

unzip awscli-bundle.zip

serverless config credentials --provider aws --key xxx --secret xxx --overwrite

cat ~/.aws/credentials

serverless deploy

sample endpoint: 
- https://5gnom1uyy9.execute-api.us-east-1.amazonaws.com/dev/system/now
- https://5gnom1uyy9.execute-api.us-east-1.amazonaws.com/dev/system/status


----------
sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

aws --version

aws configure
- AWS Access Key ID
- AWS Secret Access Key
- Default region name
- Default output format

sls config credentials -provider aws --key _xxx_ --secret _xxx_ --profile _xxx_

sls invoke local -f hello


