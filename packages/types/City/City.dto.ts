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

export type FindCityByIpOrSlug = {
  request: {
    query: {
      key?: string;
      q?: number | string;
      days?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      aqi?: "yes" | "no";
      alerts?: "yes" | "no";
    };
  };
  response: CityDto;
};
