import { useState, useEffect } from 'react';
import { loadJSONfromFile } from './loadJsonFromFile';
import { FormElement } from '../types/input';

interface FetchState {
  data: FormElement[] | null;
  loading: boolean;
  error: Error | null;
}

const UseLoopFormulary = (path: string): FetchState => {
  const [data, setData] = useState<FormElement[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch(url);
        //if (!response.ok) {
        //  throw new Error('Network response was not ok');
        //}
        // const json: T = await response.json();
        const response = await loadJSONfromFile(path);

        if(response.items) {
          const items: FormElement[] = [];
          response.items.forEach((element: FormElement) => {
            items.push(element);
          });
          items.sort((a, b) => a.position - b.position);
          setData(items);
        } else {
          setData(null);
          throw("Invalid Incoming Object");
        }
        // Validate and parse Data?

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [path]);

  return { data, loading, error };
};

export default UseLoopFormulary;