import { useState, useEffect } from "react";
import dataUrl from "../data.json?url";

export function useFetch(method, url, body, options = {}) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, { method, body, ...options });
        const houseList = await response.json();
        setData(houseList);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [method, url, body, options]);

  return { isLoading, data, error };
}

export const useFetchHouses = () => useFetch("GET", dataUrl);
export const useFetchHouse = (id) => {
  const { data, ...rest } = useFetch("GET", dataUrl);
  const house = data.find((house) => house.id === id);
  return { data: house, ...rest };
};
