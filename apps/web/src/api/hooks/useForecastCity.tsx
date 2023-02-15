import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { API_KEY, fetcher } from "api/fetcher";
import { stringify } from "querystring";
import { FindCityByIpOrSlug } from "types/City/City.dto";
import { merge } from "utils/merge";

type Props = FindCityByIpOrSlug["request"];

const defaultProps: Props = {
  query: {
    key: API_KEY,
    days: 7,
    aqi: "yes",
    alerts: "yes",
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
  console.log(q);
  const response: FindCityByIpOrSlug["response"] = await fetcher(
    `/forecast.json?${q}`
  );
  return {
    ...response,
  };
};

export const useForecastCity = (props: Props) =>
  useQuery({
    queryKey: cityKey(props),
    queryFn: fetchForecastCity,
    enabled: !!props?.query?.q,
  });
