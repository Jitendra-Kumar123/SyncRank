import {app} from "./src/app.js"
import ConnectToDB from "./src/config/db.js";
import "dotenv/config"

const PORT = process.env.PORT || 3000;

ConnectToDB();

app.listen(PORT, () => {
    console.log("server is running");
})