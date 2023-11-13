# Consultabot test network

## Build the image
Remember to do this after you edit the app

`docker build -t consultabottestclient .`

## Run one

`docker run -p 4000:4000 -e PORT=4000 consultabottestclient`

## Run several

`docker-compose up -d`
