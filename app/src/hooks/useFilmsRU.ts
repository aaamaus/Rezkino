import { useGetCurrentVideoQuery } from "@/app/store/api/filmAPI";
import { RU } from "@/app/src/constants/local";

const useFilmsRU = (id: number) => {
  const { data, isLoading } = useGetCurrentVideoQuery({
    queries: { language: RU },
    id: id
  });

  return { ruFilm: data, ruIsLoading: isLoading }
};

export default useFilmsRU;
