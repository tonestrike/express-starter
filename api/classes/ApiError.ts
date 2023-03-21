type StatusCode = 400 | 404 | 500;

class ApiError {
  message: string;
  statusCode: StatusCode;

  constructor(statusCode: StatusCode, message: string) {
    this.message = message;
    this.statusCode = statusCode;
  }

  get response() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      error: this.error,
    };
  }

  get error() {
    switch (this.statusCode) {
      case 400:
        return "Bad Request";
      case 404:
        return "Not Found";
      case 500:
        return "Internal Server Error";
      default:
        const invalidStatusCode: never = this.statusCode;
        throw new Error(`Invalid status code: ${invalidStatusCode}`);
    }
  }
}

export default ApiError;
