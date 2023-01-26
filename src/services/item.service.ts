import { Cars } from "../interfaces/cars.interface";
import ItemModel from "../models/item";

// export const insertItem = async (item: Cars) => {
//   const repsonseInsert = await ItemModel.create(item);
//   return repsonseInsert;
// };

export async function insertCar(item: Cars) {
  return await ItemModel.create(item);
}

export const getCars = async () => {
  return await ItemModel.find({});
};

export const getCar = async (_id: string) => {
  return await ItemModel.findOne({ _id });
};

export const deleteCar = async (_id: string) => {
  return await ItemModel.deleteOne({ _id });
};

export const updateCar = async (_id: string, data: Cars) => {
  const itemResponse = await ItemModel.findOneAndUpdate({ _id }, data, {
    new: true,
  });
  return itemResponse;
};
