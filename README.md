#aws-serverless:

nvm use 8.10

npm install -g aws-cli serverless


curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"

unzip awscli-bundle.zip

sudo ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws

aws --version

aws configure
- AWS Access Key ID
- AWS Secret Access Key
- Default region name
- Default output format

sls config credentials -provider aws --key _xxx_ --secret _xxx_ --profile _xxx_

sls invoke local -f hello


