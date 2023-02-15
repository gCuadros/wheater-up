import { WeatherError } from "api/error";

export const API_KEY = "ede93b110b4f476f8f022855231502";

export const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(`http://api.weatherapi.com/v1${url}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const message = await res.json();
    throw new WeatherError(message, res.status);
  }

  return res.json();
};
