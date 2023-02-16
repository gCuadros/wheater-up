import { WeatherError } from "api/error";

export const API_KEY = "ede93b110b4f476f8f022855231502";
export const fetcher = async (url: string, init?: RequestInit) => {
  const res = await fetch(`https://api.weatherapi.com/v1${url}`, {
    ...init,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers":
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const message = await res.json();
    throw new WeatherError(message, res.status);
  }

  return res.json();
};

export const ipFetcher = async () => {
  const API_IP_KEY = "45d3b496e3803ea9bf3ebc0c28bbfe2f59de766039405a14e11bfc6c";

  const res = await fetch(`https://api.ipdata.co?api-key=${API_IP_KEY}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const message = await res.json();
    throw new WeatherError(message, res.status);
  }

  return res.json();
};
