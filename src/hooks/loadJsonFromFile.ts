export const loadJSONfromFile = async (path: string) => {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error('Failed to load JSON file');
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error loading JSON:', error);
      return null;
    }
  };