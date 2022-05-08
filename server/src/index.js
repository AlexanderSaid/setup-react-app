import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`);
});
app.get("*", (req, res) =>
  res.sendFile(
    new URL("../../client/dist/index.html", import.meta.url).pathname
  )
);
