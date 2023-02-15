import { AirQualityDto } from "./AirQuality.dto";
import { AstroDto } from "./Astro.dto";
import { ConditionDto } from "./Condition.dto";
import { HourDto } from "./Hour.dto";

export interface ForecastDto {
  date: Date;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: ConditionDto;
    uv: number;
    air_quality: AirQualityDto;
  };
  astro: AstroDto;
  hour: HourDto[];
}
