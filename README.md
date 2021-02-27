# next-hasura-docker-template

Template for Next.js projects with typescript and jest running in Docker

Run `npm run up` to start the dev environment

and `npm run down` to stop it again

## Purpose

I created this to have a starter repo to use for next.js projects with Hasura Graphql underneath .

The goal is for it to work seamlessly across mac Intel, mac M1 and Windows WSL2.

## Disclaimer

This is most definitely **a work in progress**, if it does not work for your specific scenario. do not expect me to be able to allocate time to fix it for you.

PR's are welcome...

## Mac M1 (Apple Silicon)

### Node & npm

If you want it natively, you can follow the steps outlined by Justin Wride here: [Install Node and NPM natively on Apple Silicon Mac (M1)](https://justinwride.medium.com/install-node-and-npm-natively-on-apple-silicon-mac-m1-7432c826389b)

### HASURA

Yes, It runs on the M1. But with a few restrictions.

You might need to change you docker resource settings, I use these:

```yml
CPU's: 4
Memory: 6 GB # This one being to low might cause Error 137
Swap: 1 GB
Disk: 59.6 GB
```

Install _hasura-cli_ using the npm wrapper: `npm install --save-dev hasura-cli@latest`

Switch to the arm64 image in the docker-compose file by switching the images, like this:

```yml
graphql-engine:
  # image; hasura/graphql-engine:latest # latest official release for x86_64
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
