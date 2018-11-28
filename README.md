# logfunction

The simplest possible logging library.

## Motivation

Other log libraries have interfaces that are hard to mock/shim/intercept/inject. This one is simple.

## API

`index.js`

```javascript
import log from "logfunction"

log("debug", "my message", { meta: "data" })
```

In a shell

```
$> node index.js 
$> LOGFUNCTION_LEVEL=debug node index.js
my message
```

