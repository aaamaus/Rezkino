import { useGetCurrentVideoQuery } from "@/app/store/api/filmAPI";
import { UA } from "@/app/src/constants/local";

const useFilmsUA = (id: number) => {
  const { data, isLoading } = useGetCurrentVideoQuery({
    queries: { language: UA },
    id: id
  });

  return {
    uaData: data,
    uaIsLoading: isLoading
  }
};

export default useFilmsUA;
