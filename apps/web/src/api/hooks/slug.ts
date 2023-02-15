import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { useForecastCity } from "./city/useForecastCity";

// Usa este hook para obtener los slugs que sabemos que existen en nuestro sitio.

export const useSlugsParams = (): any => {
  const { query, ...props } = useRouter();

  return {
    ...slugsParams(query),
    ...props,
  };
};

export const slugsParams = (query: ParsedUrlQuery) => ({
  citySlug:
    query.citySlug !== "undefined" ? (query.citySlug as string) : undefined,
});

export const useCurrentForecastCity = () => {
  const { citySlug } = useSlugsParams();
  return useForecastCity({ query: { q: citySlug } });
};
