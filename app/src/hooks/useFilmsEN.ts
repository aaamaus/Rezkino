import { useGetCurrentVideoQuery } from "@/app/store/api/filmAPI";
import { EN } from "@/app/src/constants/local";

const useFilmsEN = (id: number) => {
  const { data } = useGetCurrentVideoQuery({
    queries: { language: EN },
    id: id
  });

  return { enData: data }
};

export default useFilmsEN;
