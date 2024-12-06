import { ZodError, ZodIssue } from "zod";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";
import { StatusCodes } from "http-status-codes";

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode: StatusCodes.BAD_REQUEST,
    message: "Validation Error",
    errorSources,
  };
};

export default handleZodError;
