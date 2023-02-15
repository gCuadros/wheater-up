type WeatherErrorAPI = {
  code: string;
  message?: string;
};

export class WeatherError extends Error {
  public status?: number;
  public key: string;

  constructor(error: WeatherErrorAPI, status: number) {
    super(error.message || "Something went wrong");
    this.key = error.code || "generic-api-error";
    this.status = status;
  }
}
