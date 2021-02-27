# next-docker-template

Template for Next.js project with typescript and jest running in Docker

Run `npm run up` to start the dev environment

and `npm run down` to stop it again

## Purpose

I created this repo to have a starter repo to use for next.js projects. The goal is for it to work seamlessly across mac Intel, mac M1 and Windows WSL2.

## Known issues and workarounds

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
