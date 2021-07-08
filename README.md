# docker-jsonplaceholder-node

A dockerized basic node express server that returns data from [JSONplaceholder](https://jsonplaceholder.typicode.com/) public API

## Starting the application

 Clone this repo using 
`git clone git@github.com:AnthonyDelaCruz/docker-jsonplaceholder-node.git`

### Running the development server using the docker container
```
# Make sure you have docker running and you have docker-compose installed
docker-compose -f docker-compose.dev.yml up -d --build

# To close the container, run
docker-compose -f docker-compose.dev.yml down -v
```

### Running the development server locally
```
npm install

npm run dev
```

