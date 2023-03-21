import ApiError from "../../api/classes/ApiError";

describe("ApiError", () => {
  test("it should generate a response", async () => {
    const message = "Invalid request";
    const statusCode = 400;
    const apiError = new ApiError(statusCode, message);
    expect(apiError.response).toEqual({
      message,
      statusCode,
      error: "Bad Request",
    });
  });
});
