# Change Log

## 2.5.0

-   Enriched README with more information on how to specify the logger function to be used. (#66)
-   Add log config into error logger with a promise (#72) (#73)
-   Customizing logger function doesn't work, always uses global config logger (#75) (#76)
-   Remove lib folder (#77) (#78)
-   logger is a required but not actually used (#71)

## 2.4.0

-   Support more loggers (#53) (#62)
-   Placing HTTP method first, then the URL (#60) (#63)
-   Allow for no timestamp being appended (#64)
-   Explicitly set defaults in the code, as documented (#65)

## 2.3.1

-   Fix `headers` config typo
-   Add change log
-   Add contribute guide

## 2.3.0

-   Add default use options
-   Add Logo
-   Add some test cases

## 2.2.1

-   Add missing build files

## 2.2.0

-   Logging Header fields
-   Tweak updating README.md

## 2.1.0

-   Add Configuration

## 2.0.1

-   Add Circle CI
-   Update README.md
-   Change import style

#### As-Is

```js
import AxiosLogger from 'axios-logger';
```

#### To-Be

```js
import * as AxiosLogger from 'axios-logger';
```

## 2.0.0

-   Refactoring via typescript

## 1.0.0

-   First version release
