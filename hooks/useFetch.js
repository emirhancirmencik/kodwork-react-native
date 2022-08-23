/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      await axios.get(url).then(resp => setData(resp.data));
      setLoading(false);
      return;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return err;
    }
  };

  return { data, loading, error };
}
