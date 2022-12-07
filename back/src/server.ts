import { app } from "./app";

const PORT = Number(process.env.PORT) || 8080;

app.listen(5000, () => console.log(`server running at ${PORT}`));
