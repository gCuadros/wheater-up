export interface CityDto {
  id: number;
  name: string;
  slug: string;
  status: string;
  shortName?: string;
  enabled?: boolean;
  deleted?: boolean;
  blocked?: boolean;
  createdBy?: number;
  numUsers: number;
  courses?: number;
  logoUrl?: string;
  backgroundUrl?: string;
  enrolledStudents: number;
  enrolledStudentsPrecision: string;
  createdAt?: number;
  updatedAt?: number;
  lastUpdatedAt?: number;
  deletedAt?: number;
}

export enum CITY_POPULATE_OPTIONS {
  AIR = "aqi",
}

export type CityDtoPopulate = {
  [CITY_POPULATE_OPTIONS.AIR]?: any;
};

export type FindCityByIpOrSlug = {
  request: {
    q?: number | string;
  };
  response: CityDto;
};
