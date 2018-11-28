# logfunction

The simplest possible logging library.

## Motivation

Other log libraries have interfaces that are hard to mock/shim/intercept/inject. This one is simple.

It's written in TypeScript and has types such that you can't pass wrong values for the log level argument.

## API

`index.js`

```javascript
import log from "logfunction"

// log(level, ...loggables)
log(process.env.LOGFUNCTION_LEVEL, "my message", { meta: "data" })
```

In a shell

```
$> node index.js 
$> LOGFUNCTION_LEVEL=debug node index.js
my message
```
