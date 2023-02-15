import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { fetcher } from "api/fetcher";
import { FindCityByIpOrSlug } from "types/City/City.dto";

type Props = FindCityByIpOrSlug["request"];

export const cityKey = (props: Props) =>
  [
    {
      id: "city",
      scope: "city",
      entity: "detail",
      ...props,
    },
  ] as const;

export const fetchCity = async ({
  queryKey: [{ params }],
}: QueryFunctionContext<ReturnType<typeof cityKey>>) => {
  console.log(params?.q);
  const response: FindCityByIpOrSlug["response"] = await fetcher(
    `&q=${params?.q}`
  );
  return {
    ...response,
  };
};

export const useCity = (props: Props) =>
  useQuery({
    queryKey: cityKey(props),
    queryFn: fetchCity,
    enabled: !!props.params?.q,
  });
