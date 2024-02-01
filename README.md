# express_21react

 Version: 0.9.1

 Author  : Kouji Nakashima / kuc-arc-f.com

 date    : 2024/01/14

 update : 2024/02/01  

***

React SPA + express SSR, sample

* vercel deploy, sample

***
### Setup

* .env
* if use, external api server

```
API_URL=http://localhost:4000
```
***
### dev-start

```
npx esbuild --bundle ./src/client.tsx --format=esm --minify --outfile=./public/static/client.js
yarn dev
```

* watch
```
npx esbuild --bundle ./src/client.tsx --format=esm --minify --outfile=./public/static/client.js --watch
```

***
### tailwindcss

```
npx tailwindcss -i ./src/main.css -o ./public/static/main.css
```
***
### blog

https://zenn.dev/knaka0209/scraps/44a812684ddbf4

***

