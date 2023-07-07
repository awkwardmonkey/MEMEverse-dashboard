# MEMEverse Dashboard

A consideration for deployment is that this is an SPA (single page application) and therefore will require a simple server-side [configuration](https://router.vuejs.org/guide/essentials/history-mode.html) change in the case of a page refresh.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker
This creates a docker image called `memeverse-dashboard` that can be used with docker-compose at `memeciti-domain-server-docker`. This image also can be used for development purposes.

### docker Build
In order to build, go to the `docker` dir and execute the build script.
```bash
cd docker && docker-build.sh
```

### docker run
In order to run a container based on the image, go to the `docker` dir and execute the run script.
```bash
cd docker && run-memeverse-dashboard.sh
```
Port 8080 will be open and its log can be found in the `log` dir.
