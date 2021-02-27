# next-docker-template

Template for Next.js project with typescript and jest running in Docker

The next.js application in `./next-app` is based on this next.js org example repo: [with-typescript-eslint-jest](https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest)

Run `docker-compose up`

## Purpose

I created this repo to have a starter repo to use for next.js projects. The goal is for it to work seamlessly across mac Intel, mac M1 and Windows WSL2.

## Known issues and work arounds

### WSL2 cocker compose issue

If you encounter the following error running `docker-compose up` under WSL2:

```shell
ERROR: gcloud failed to load: /tmp/_MEI33DueT/libssl.so.1.1: version `OPENSSL_1_1_1' not found (required by /usr/lib/python3.8/lib-dynload/_ssl.cpython-38-x86_64-linux-gnu.so)
```

Run: `export CLOUDSDK_PYTHON=python2` to fix it
