export interface LocationDto {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: Date;
  localtime: Date;
}
