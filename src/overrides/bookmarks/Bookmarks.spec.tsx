import { render, screen } from '@testing-library/preact';
import Bookmarks from './Bookmarks';

describe('Bookmarks page', () => {
  it('should render the Bookmarks page', () => {
    render(<Bookmarks />);
    expect(screen.getByTestId('bookmarks_text').textContent).toEqual(
      'Bookmarks page'
    );
  });
});
