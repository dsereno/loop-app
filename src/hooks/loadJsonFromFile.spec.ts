import { loadJSONfromFile } from "./loadJsonFromFile";


describe('loadJSONfromFile', () => {
  beforeEach(() => {
    // Mock the fetch function
    (global.fetch as jest.Mock) = jest.fn();
  });

  afterEach(() => {
    // Clear the fetch mock
    (global.fetch as jest.Mock).mockClear();
  });

  it('should fetch JSON data from the provided path', async () => {
    // Mock the response
    const mockResponse = { foo: 'bar' };
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });
    (global.fetch as jest.Mock).mockReturnValue(mockFetchPromise);

    // Call the function
    const path = '/data.json';
    const result = await loadJSONfromFile(path);

    // Assert that fetch was called with the correct path
    expect(global.fetch).toHaveBeenCalledWith(path);

    // Assert that the function returns the correct JSON data
    expect(result).toEqual(mockResponse);
  });

  it('should handle error when fetching JSON data', async () => {
    // Mock the failed response
    const mockFetchPromise = Promise.resolve({
      ok: false,
      statusText: 'Not Found',
    });
    (global.fetch as jest.Mock).mockReturnValue(mockFetchPromise);

    // Call the function
    const path = '/invalid.json';
    const result = await loadJSONfromFile(path);

    // Assert that fetch was called with the correct path
    expect(global.fetch).toHaveBeenCalledWith(path);

    // Assert that the function returns null
    expect(result).toBeNull();
  });
});