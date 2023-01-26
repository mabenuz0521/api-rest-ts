import { Schema, Types, model, Model } from "mongoose";
import { Cars } from "../interfaces/cars.interface";

const ItemSchema = new Schema<Cars>(
  {
    color: {
      type: String,
      required: true
    },
    gas: {
      type: String,
      enum: ["gasoline", "electric"],
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("items", ItemSchema);

export default ItemModel;
