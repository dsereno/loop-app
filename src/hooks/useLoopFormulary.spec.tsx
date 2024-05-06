import { renderHook, waitFor  } from '@testing-library/react';
import { loadJSONfromFile } from './loadJsonFromFile';
import UseLoopFormulary from './useLoopFormulary';

jest.mock('./loadJsonFromFile');

describe('UseLoopFormulary', () => {
  it('should fetch and parse JSON data correctly', async () => {
    // Mock the response from loadJSONfromFile
    const mockData = {
      items: [
        {
          id: 1,
          position: 1,
          type: 'input:select',
          label: 'Estado do equipamento? (input:select)',
          required: false,
          hint: 'This is a hint!',
          hint_url: 'https://www.google.pt',
          hint_icon: 'fa-check',
          options: [
            {
              id: 12,
              label: 'Grade A',
              value: 'explicabo deal',
              deal_breaker: false,
            },
            {
              id: 13,
              label: 'Grade B',
              value: 'ex',
              deal_breaker: false,
            },
            {
              id: 14,
              label: 'Grade C (DEAL BREAKER)',
              value: 'dolore',
              deal_breaker: true,
            },
          ],
        },
      ],
    };
    (loadJSONfromFile as jest.Mock).mockResolvedValue(mockData);

    // Render the hook
    const { result } = renderHook(() => UseLoopFormulary('/data.json'));

    // Assert initial loading state
    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();

    // Wait for the hook to finish fetching data
    await waitFor(() =>  {
    // Assert that data is loaded and parsed correctly
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(mockData.items);
        expect(result.current.error).toBeNull();
    });
  });
});