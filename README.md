# axios-logger

> Beautify Axios Logging Messages.

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
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger);
```

If you want to use your own interceptor, you can compose(mixin) with `requestLogger`.

```javascript
instance.interceptors.request.use((config) => {
    // write down your request interceptor.
    AxiosLogger.requestLogger(config);
});
```

### Logging Response

```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.responseLogger);
```

Also if you want to use your own interceptor, you can compose(mixin) with `responseLogger`.

```javascript
instance.interceptors.response.use((response) => {
    // write down your response interceptor.
    AxiosLogger.responseLogger(response);
});
```

### Error

You can inject `errorLogger` right after `requestLogger` or `responseLogger`.

```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
```

If you want to use your own error interceptor, you can compose(mixin) with logger.

```javascript
instance.interceptors.response.use(AxiosLogger.requestLogger, (err) =>{
    // write down your error intercept.
    AxiosLogger.errorLogger(err);
});
```

## CONTRIBUTE

I always welcome Feedback and Pull Request :)