var req = require.context('./', true, /\.js$/)
req.keys().map(req)