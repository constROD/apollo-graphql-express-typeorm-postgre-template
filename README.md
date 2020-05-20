# Apollo GraphQL, Express, TypeORM and PostgreSQL Template
This repo uses `tsc` for bundling all ts file

# Installation
```
git clone https://github.com/constROD/apollo-graphql-express-typeorm-postgre-template
cd apollo-graphql-express-typeorm-postgre-template
npm install or yarn
```

# Usage
#### For development run api with `ts-node-dev` to watch api when changes occur. ####
```
npm run dev or yarn dev
```

#### For production it will build api first before deploying to server. ####
1. `dev:deploy` - it uses node to run. I used this in my local for testing if the build is success 
2. `prod:deploy`- it uses node also but with pm2 to run. I used this on my server if no errors occur.
```
npm run dev:deploy or yarn dev:deploy
```
```
npm run prod:deploy or yarn prod:deploy
```
