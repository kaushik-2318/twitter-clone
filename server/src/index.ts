import { initServer } from "./app";
import 'dotenv/config'

async function init(){
    const app = await initServer();
    app.listen(8080, () => console.log('Server is running on port 8080'));
}

init();