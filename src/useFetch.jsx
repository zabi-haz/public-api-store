import axios from "axios";
import { useState, useEffect } from "react";
export default function useFetch() {
  const [data, setData] = useState(null);
  let api = `https://api.publicapis.org/entries`;

  const FetchingMovie = async () => {
    const data = await axios.get(api).then((res) => {
      setData(res.data.results);
    });
  };
  useEffect(() => {
    FetchingMovie();
  }, [api]);

  return { data };
}
