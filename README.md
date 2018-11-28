# logfunction

The simplest possible logging library.

## Motivation

Other log libraries have interfaces that are hard to mock/shim/intercept/inject. For example, they often have who-knows-how-many `logger.{info,debug,warn}(...?)` methods. What exactly is the signature there? logger is an object with an interface that varies across libraries. 

This one is simple. You dont have a logger object, you have a logger *function*. The first argument is a [log level](https://www.ibm.com/support/knowledgecenter/en/SSEP7J_10.2.2/com.ibm.swg.ba.cognos.ug_rtm_wb.10.2.2.doc/c_n30e74.html) hint, and the rest of the args get logged.

It's written in TypeScript and has types such that you can't pass wrong values for the log level argument.

I found this useful while building [permanent.cloud](https://permanent.cloud). Consider check it out and following along via email or [@PermanentCPU](https://twitter.com/PermanentCPU).

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

That's it :|
