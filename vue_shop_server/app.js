const express = require("express");

/* gize压缩 */
const compression = request('compression')

const app = express()
app.use(compression())
app.use(express.static('./dist'))

app.listen(8000, () => {
    console.log('server running at http://127.0.0.1');
})