import ItemModel from "../models/item";


export const getOrders = async () => {
  return await ItemModel.find({});
};
   
