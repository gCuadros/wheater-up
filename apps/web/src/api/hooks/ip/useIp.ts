import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ipFetcher } from "api/fetcher";
import { IpLocationDto } from "types/IpLocation/IpLocation.dto";

import { useCity } from "../city/useCity";
import { useForecastCity } from "../city/useForecastCity";

export const ipKey = () =>
  [
    {
      id: "ip",
      scope: "ip",
      entity: "detail",
    },
  ] as const;

export const fetchIp = async ({
  queryKey: [],
}: QueryFunctionContext<ReturnType<typeof ipKey>>) => {
  const response: IpLocationDto = await ipFetcher();
  return response;
};

export const useIpLocation = () =>
  useQuery({
    queryKey: ipKey(),
    queryFn: fetchIp,
    select: (data) => data.city.toLowerCase(),
  });

export const useCurrentIpForecastCity = () => {
  const { data: ipLocation } = useIpLocation();
  return useForecastCity({
    query: { q: ipLocation },
  });
};

export const useCurrentIpCity = () => {
  const { data: ipLocation } = useIpLocation();
  return useCity({
    query: { q: ipLocation },
  });
};
