# next-hasura-docker-template

Template for Next.js project with typescript and jest running in Docker

Run `npm run up` to start the dev environment

and `npm run down` to stop it again

## Purpose

I created this repo to have a starter repo to use for next.js projects. The goal is for it to work seamlessly across mac Intel, mac M1 and Windows WSL2.

## Known issues and workarounds

## Mac M1 (Apple Silicon)

It runs on the M1. But with a few restrictions.

Install _hasura-cli_ using the npm wrapper: `npm install --save-dev hasura-cli@latest`

Switch to the arm64 image in the docker-compose file by switching the images, like this:

```yml
graphql-engine:
  image: fedormelexin/graphql-engine-arm64 # Image for arm64 (Mac M1)
  # image: hasura/graphql-engine:v2.0.0-alpha.2 # Image for x86_64
```

The arm64 image is a community created version as there is not yet an official version for arm64.

**Metadata handling using the hasura cli is not supported on arm64, yet**

This is due to a plugin installation that fails. Hopefully it will be fixed soon.

## WSL2

### Install location

Run the project in a folder under linux control aka `~/somefolder/` NOT `mnt/c/...` as this is under windows and will kill performance and file system monitoring

### issue with running npm install on the host

use `npm install --unsafe-perm`

### docker compose issue

If you encounter the following error running `docker-compose up` under WSL2:

```shell
ERROR: gcloud failed to load: /tmp/_MEI33DueT/libssl.so.1.1: version `OPENSSL_1_1_1' not found (required by /usr/lib/python3.8/lib-dynload/_ssl.cpython-38-x86_64-linux-gnu.so)
```

Run: `export CLOUDSDK_PYTHON=python2` to fix it (add to your .zshrc maybe)
