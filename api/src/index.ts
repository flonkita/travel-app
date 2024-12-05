import express from "express";
import cors from "cors";
import TravelController from "./travel/travel.controller";

const travelList = [
] as any;

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/travels", TravelController);

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
