# axios-logger

[![npm](https://img.shields.io/npm/v/axios-logger.svg)](https://www.npmjs.com/package/axios-logger)
[![npm](https://img.shields.io/npm/dm/axios-logger.svg)](https://www.npmjs.com/package/axios-logger)
[![GitHub license](https://img.shields.io/github/license/hg-pyun/axios-logger.svg)](https://github.com/hg-pyun/axios-logger/blob/master/LICENSE)
[![CircleCI](https://circleci.com/gh/hg-pyun/axios-logger/tree/master.svg?style=svg)](https://circleci.com/gh/hg-pyun/axios-logger/tree/master)

> Beautify Axios Logging Messages.

![logo](https://user-images.githubusercontent.com/10627668/71610415-31653980-2bd4-11ea-90af-cd50a50c57ea.png)

When you send a request in nodejs, you need to show the log to the console.
This library display the necessary information while communicating with the server.

Basically This package is working as [Axios's interceptors](https://github.com/axios/axios#interceptors).

![sample](https://user-images.githubusercontent.com/10627668/41816761-1700b662-77c8-11e8-80d4-7d223169364a.png)

## Install

```
$ npm install axios-logger --save-dev
```

## How to use

You can use various loggers through the `axios`'s interceptor API.

### Logging Request

```javascript
import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger);
```

If you want to use your own interceptor, you can compose(mixin) with `requestLogger`.

```javascript
instance.interceptors.request.use((request) => {
    // write down your request intercept.
    return AxiosLogger.requestLogger(request);
});
```

### Logging Response

```javascript
import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.response.use(AxiosLogger.responseLogger);
```

Also if you want to use your own interceptor, you can compose(mixin) with `responseLogger`.

```javascript
instance.interceptors.response.use((response) => {
    // write down your response intercept.
    return AxiosLogger.responseLogger(response);
});
```

### Error

You can inject `errorLogger` right after `requestLogger` or `responseLogger`.

```javascript
import axios from 'axios';
import * as AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
```

Also if you want to use your own interceptor, you can compose(mixin) with `errorLogger`.

```javascript
instance.interceptors.response.use(AxiosLogger.responseLogger, (err) => {
    // write down your error intercept.
    return AxiosLogger.errorLogger(err);
});
```

## Configuration Settings

You can adjust several features as desired through configuration file.
If you want to set config globally, using `setGlobalConfig` method.

```javascript
setGlobalConfig({
    prefixText: 'your prefix',
    dateFormat: 'HH:MM:ss',
    status: false,
    header: true,
});
```

Or it can also be passed on as a second argument and applied locally.

```javascript
instance.interceptors.request.use((request) => {
    // write down your request intercept.
    return AxiosLogger.requestLogger(request, {
        prefixText: 'your prefix',
        dateFormat: 'HH:MM:ss',
        status: false,
        header: true,
    });
});
```

#### Enable config list

-   url: boolean (default true)
-   method: boolean (default true)
-   data: boolean (default true)
-   status: boolean (default true)
-   prefixText: string | false (default Axios)
-   dateFormat: [dateformat](https://github.com/felixge/node-dateformat) | false (default isoDateTime)
-   header: boolean (default false)

## CONTRIBUTE

I always welcome Feedback and Pull Request :)
