import { CityDto } from "../City/City.dto";

export interface SearchCities {
  request: {
    query: {
      key?: string;
      q?: number | string;
    };
  };
  response: CityDto[];
}
