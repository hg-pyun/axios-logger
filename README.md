# axios-logger
Beautify Axios Logging Messages.

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

#### Response
```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.responseLogger);
```

#### Error
```javascript
import axios from 'axios';
import AxiosLogger from 'axios-logger';

const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.errorLogger);
```

# CONTRIBUTE
TBD.