import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { API_KEY, fetcher } from "api/fetcher";
import { stringify } from "querystring";
import { FindCityForecastByIpOrSlug } from "types/City/CityForecast.dto";
import { merge } from "utils/merge";

type Props = FindCityForecastByIpOrSlug["request"];

const defaultProps: Props = {
  query: {
    key: API_KEY,
    days: 7,
    aqi: "yes",
  },
};

export const cityKey = (props: Props) =>
  [
    {
      id: "city",
      scope: "city",
      entity: "detail",
      ...merge(defaultProps, props),
    },
  ] as const;

export const fetchForecastCity = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof cityKey>>) => {
  const q = stringify(query);

  const response: FindCityForecastByIpOrSlug["response"] = await fetcher(
    `/forecast.json?${q}`
  );
  return response;
};

export const useForecastCity = (props: Props) =>
  useQuery({
    queryKey: cityKey(props),
    queryFn: fetchForecastCity,
    enabled: !!props?.query?.q,
  });
