import { Router } from "express";
import { findAll, findOne } from "./travel.service";
const router = Router();

router.get("/", (req, res) => {
    const travels = findAll();

    res.send(travels);
    });

router.get("/:id", (req, res) => {
    const { id } = req.params;
    const travel = findOne(Number(+id));
    
    res.send(travel);
    });


router.post("/", (req, res) => {
    res.send("Create a Travel");
    });

    export default router;