# How to use this repo

# Installed Package
* nodejs + npm
* mongo 3.6.x
* docker

# How to run
* config mongo by add database from file `mongo/mongo-init.js`

## Run Backend
```
cd backend
npm install
npm start
```

See logs on `MongoDB database connection established successfully`

backend will run on port 4000

## Run frontend
```
cd frontend
npm install
npm start
```

## Build Frontend
Change base url first

```
npm build
cd build
python3 -m http.server 8080
```
1. create kops cluster
2. create rds ( stg & prd ) untuk mendapatkan dns endpoint nya
3. buat docker image nya dari lokal
4. push ke docker hub imagenya
5. kalau rds nya sudah jadi, connect via master/worker node untuk nge dump db sql nya
6. taruh dns rds nya di values.yaml
7. install helm depedencies nya
8. helm install nginxctl
9. helm install chart yang berisi deployment dan teman2nya
10. happy troubleshooting 
-cluster
-rds
-create user, grant, dump ec2 master
-install nginx-controller helm
-arahkan route53 ke nginxcontroller
-kubectl create namespace staging
-kubectl create namespace staging