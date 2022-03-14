import { useState, useEffect, useRef } from 'react';

interface moviesData {
  data: any;
  loading: boolean;
  error: boolean;
}

export const useFetch = (url: string) => {
  const isMounted = useRef(true);
  const [state, setState] = useState<moviesData>({
    data: null,
    loading: true,
    error: false,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: false });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: false,
            data,
          });
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: true,
        });
      });
  }, [url]);

  return state;
};
