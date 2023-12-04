import { render, screen } from '@testing-library/preact';
import NewTab from './NewTab';

describe('New Tab page', () => {
  it('should render the New Tab page', () => {
    render(<NewTab />);
    expect(screen.getByTestId('newtab_text').textContent).toEqual(
      'New Tab page'
    );
  });
});
