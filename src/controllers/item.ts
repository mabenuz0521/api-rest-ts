import { Request, response, Response } from "express";
import {
  insertCar,
  getCars,
  getCar,
  deleteCar,
  updateCar,
} from "../services/item.service";
import { handleHttp } from "../utils/error.handle";

export const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertCar(body);
    res.send(response);
  } catch (e: any) {
    handleHttp(res, "ERROR_POST_ITEMS", e);
  }
};

export const updateItem = async ({ params, body }: Request, res: Response) => {
  const { id } = params;
  const response = await updateCar(id, body);
  res.send(response);
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

export const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const response = await deleteCar(params.id);
    const data = response ?  response: "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
