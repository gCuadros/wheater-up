import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { API_KEY, fetcher } from "api/fetcher";
import { stringify } from "querystring";
import { SearchCities } from "types/Search/Search.dto";
import { merge } from "utils/merge";

type Props = SearchCities["request"];

const defaultProps: Props = {
  query: {
    key: API_KEY,
  },
};

export const searchKey = (props: Props) =>
  [
    {
      id: "search",
      scope: "search",
      entity: "list",
      ...merge(defaultProps, props),
    },
  ] as const;

export const fetchSearch = async ({
  queryKey: [{ query }],
}: QueryFunctionContext<ReturnType<typeof searchKey>>) => {
  const q = stringify(query);

  const response: SearchCities["response"] = await fetcher(`/search.json?${q}`);
  return response;
};

export const useSearchCities = (props: Props) =>
  useQuery({
    queryKey: searchKey(props),
    queryFn: fetchSearch,
    enabled: !!props?.query?.q,
  });
