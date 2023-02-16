import { Alerts } from "../Request/Alerts";
import { Aqi } from "../Request/Aqi";
import { Days } from "../Request/Days";

import { CityCurrentDto } from "./CityCurrent.dto";
import { LocationDto } from "./Location.dto";

export interface CityCurrentSmall {
  location: LocationDto;
  current: CityCurrentDto;
}

export interface FindCityByIpOrSlug {
  request: {
    query: {
      key?: string;
      q?: number | string;
      days?: Days;
      aqi?: Aqi;
      alerts?: Alerts;
    };
  };
  response: CityCurrentSmall;
}
