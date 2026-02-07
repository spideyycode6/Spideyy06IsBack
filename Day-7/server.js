// server ko start karna and database se connect karna
const connectToDb = require('./src/config/database');
const app = require("./src/app");

connectToDb();

app.listen(3000,()=>{
    console.log("servers is running")
});
