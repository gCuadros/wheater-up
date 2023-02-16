import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { API_KEY, fetcher } from "api/fetcher";
import { stringify } from "querystring";
import { FindCityByIpOrSlug } from "types/City/CityCurrentSmall.dto";
import { merge } from "utils/merge";

type Props = FindCityByIpOrSlug["request"];

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

export const fetchCity = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof cityKey>>) => {
  const q = stringify(query);

  const response: FindCityByIpOrSlug["response"] = await fetcher(
    `/current.json?${q}`
  );
  return response;
};

export const useCity = (props: Props) =>
  useQuery({
    queryKey: cityKey(props),
    queryFn: fetchCity,
    enabled: !!props?.query?.q,
  });
