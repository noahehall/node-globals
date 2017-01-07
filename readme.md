# Globals!
  - immutable namespaced globals for isomoprhic and progressive web applications
  - Constants management and logic for node, client, and worker threads

## why are we here?
  - dont you hate importing and requiring your constants and lib functions all over the friggin place?
    + include namespaced constants and functions one time:
      - on the server, e.g. server.js
      - in the main client thread, e.g. client.js
      - in worker thread, e.g. rootWorker.js
    + on the client main thread: window.appFuncs.somefunction (or just appFuncs.blah)
    + on the client worker thread: self.appConsts.someconst (or just appConsts.blah)
    + in node: global.appFuncs.someFunc (or just appFuncs)

## Including globals
  - at the top of the appropriate file:

```
  const setGlobals = require('node-globals').default;
  setGlobals({});
  // or setGlobals({ constants: {...} }) // add or override default constants
  // or setGlobals({ functions: {...} }) // add or override default functions
  // or setGlobals({ constants: {...}, functions: {...} })
```

  - or without creating a variable, merging process.env variables within your constants, and storing your constants in a some/directory/config.js
```
  require('node-globals').default({
    constants: Object.assign(
      { nodeOnline: process.env.NODE_ONLINE === 'true' }, require('../config.js').constants
    )
  });
```

thank me later...
