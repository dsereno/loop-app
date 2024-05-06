import { render, waitFor } from '@testing-library/react';
import App from './App';
import UseLoopFormulary from './hooks/useLoopFormulary';

//Mock Hook

jest.mock('./hooks/useLoopFormulary', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App', () => {
  it('should render the Select Input if it is returned in the UseLoopFormulary hook', async () => {
    (UseLoopFormulary as any).mockReturnValue({
      data: [
        {
          "id": 1,
          "position": 1,
          "type": "input:select",
          "label": "Estado do equipamento? (input:select)",
          "required": false,
          "hint": "This is a hint!",
          "hint_url": "https://www.google.pt",
          "hint_icon": "fa-check",
          "options": [
            {
              "id": 12,
              "label": "Grade A",
              "value": "explicabo deal",
              "deal_breaker": false
            },
            {
              "id": 13,
              "label": "Grade B",
              "value": "ex",
              "deal_breaker": false
            },
            {
              "id": 14,
              "label": "Grade C (DEAL BREAKER)",
              "value": "dolore",
              "deal_breaker": true
            }
          ]
        }
      ],
      loading: true,
      error: null,
    });

    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId("input-select")).toBeInTheDocument();
    });
  });
});
