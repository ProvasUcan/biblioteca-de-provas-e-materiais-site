import { useEffect, useState } from "react";

const useLoadingImage = (imgSrc) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  return { data, isPending, error };
}

export default useLoadingImage;