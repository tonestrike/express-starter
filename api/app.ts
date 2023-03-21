import "config";
import Server from "classes/Server";

const { app } = new Server();

app.listen(process.env.APP_PORT, () =>
  console.log(
    `${process.env.APP_NAME} Server is Running on Port ${process.env.APP_PORT}`
  )
);
