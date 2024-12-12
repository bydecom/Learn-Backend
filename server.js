const app = require("./src/app");
require('dotenv').config();
const PORT = process.env.PORT;

process.env.UV_THREADPOOL_SIZE = os.cpus.length;
const server = app.listen(3055, ()=> {
    console.log(`WSW ecommerce start with ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit Server Exxpress`))

})