import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

type UseSearchReturn = {
  searchText: string;
  search: (text: string) => void;
};

export const useSearch = (debounceDelay: number = 500): UseSearchReturn => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState<string>(searchParams.get('search') || "");
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const query = searchParams.get('search');
    setSearchText(query ?? "");
  }, [searchParams]);

  const search = (text: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (text) {
        params.set('search', text);
      } else {
        params.delete('search');
      }

      setSearchParams(params, { replace: true });
    }, debounceDelay);
  };

  return { searchText, search };
}
