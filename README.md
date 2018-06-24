# axios-logger
> Beautify Axios Logging Messages.

When you send a request in nodejs, you need to show the log to the console.
This library display the necessary information while communicating with the server.

![sample](https://user-images.githubusercontent.com/10627668/41816761-1700b662-77c8-11e8-80d4-7d223169364a.png)
# Install
```
$ npm install axios-logger --save-dev
```

# How to use
You can use logger with `axios` interceptor.

#### Request
```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger);
```

If you want to use your custom interceptor, you can mixin with logger like this.
```javascript
instance.interceptors.request.use((config) => {
    // write down your request intercept.
    AxiosLogger.requestLogger(config);
});
```

#### Response
```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.responseLogger);
```

If you want to use your custom interceptor, you can mixin with logger like this.
```javascript
instance.interceptors.response.use((response) => {
    // write down your response intercept.
    AxiosLogger.responseLogger(response);
});
```

#### Error
You can errorLogger that pass second argument.
```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger, AxiosLogger.errorLogger);
instance.interceptors.response.use(AxiosLogger.responseLogger, AxiosLogger.errorLogger);
```

If you want to use your custom interceptor, you can mixin with logger like this.
```javascript
instance.interceptors.response.use(AxiosLogger.requestLogger, (err) =>{
    // write down your error intercept.
    AxiosLogger.errorLogger(err);
});
```

# CONTRIBUTE
I always welcome Feedback and Pall Request :)