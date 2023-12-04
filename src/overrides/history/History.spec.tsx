import { render, screen } from '@testing-library/preact';
import History from './History';

describe('History page', () => {
  it('should render the History page', () => {
    render(<History />);
    expect(screen.getByTestId('history_text').textContent).toEqual(
      'History page'
    );
  });
});
