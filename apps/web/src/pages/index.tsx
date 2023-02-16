import { dehydrate, QueryClient } from "@tanstack/react-query";
import { cityKey, fetchCity } from "api/hooks/city/useCity";
import { fetchIp, ipKey } from "api/hooks/ip/useIp";
import Home from "containers/Home";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  const citybyIp = await fetchIp({
    queryKey: ipKey(),
    meta: undefined,
  });

  const city = await fetchCity({
    queryKey: cityKey({
      query: { q: citybyIp.city },
    }),
    meta: undefined,
  });
  queryClient.setQueryData(
    cityKey({
      query: { q: citybyIp.city },
    }),
    city
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Page = () => <Home />;

export default Page;
