import ApiError from "classes/ApiError";
import { ErrorRequestHandler } from "express";

export const errorResponseHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json(error.response);
  } else {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
