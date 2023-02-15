import { Alerts } from "../Request/Alerts";
import { Aqi } from "../Request/Aqi";
import { Days } from "../Request/Days";

import { CityCurrentDto } from "./CityCurrent.dto";
import { ForecastDto } from "./Forecast.dto";
import { LocationDto } from "./Location.dto";

export interface CityForecastDto {
  location: LocationDto;
  current: CityCurrentDto;
  forecast: { forecastday: ForecastDto[] };
}

export interface FindCityForecastByIpOrSlug {
  request: {
    query: {
      key?: string;
      q?: number | string;
      days?: Days;
      aqi?: Aqi;
      alerts?: Alerts;
    };
  };
  response: CityForecastDto;
}
