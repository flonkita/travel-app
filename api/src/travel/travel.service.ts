import pool from "../config/database";
import { ITravel, ITravelDTO } from "./travel.types";

export const findAll = async (): Promise<ITravel[]> => {
    const { rows } = await pool.query("SELECT * FROM travel");

    return rows;
};

export const findOne = async (id: number): Promise<ITravel> => {
    const { rows } = await pool.query("SELECT * FROM travel WHERE id = $1", [id]);

    return rows[0];
};

export const create = async (travelDTO: ITravelDTO): Promise<ITravel> => {


    
}