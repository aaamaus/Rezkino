import { useGetCurrentVideoQuery } from "@/app/store/api/filmAPI";
import { RU } from "@/app/src/constants/local";

const useFilmsRU = (id: number) => {
  const { data } = useGetCurrentVideoQuery({
    queries: { language: RU },
    id: id
  });

  return { ruFilm: data }
};

export default useFilmsRU;
