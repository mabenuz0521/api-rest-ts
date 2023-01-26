import { Response } from "express";

const handleHttp = (response: Response, error: string, errorRaw?: any) => {
  response.status(500);
  response.send({ error });
};

export { handleHttp };
