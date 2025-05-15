import { useSearchParams } from "react-router-dom";

export const useUpdateParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParam = ({ key, value }) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  return { updateParam };
};
