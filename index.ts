import express from "express";

const app: express.Express = express();

const router: express.Router = express.Router();
router.get("/", (req: express.Request, res: express.Response) => {
  res.send(req.query);
});
app.use(router);

app.listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
