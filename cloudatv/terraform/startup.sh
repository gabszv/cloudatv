yum update -y
yum install docker -y
systemctl start docker
systemctl enable docker
docker run -d -p 80:80 nginx