import { render, screen } from '@testing-library/preact';
import Sidepanel from './Sidepanel';

describe('Sidepanel page', () => {
  it('should render the Sidepanel page', () => {
    render(<Sidepanel />);
    expect(screen.getByTestId('newtab_text').textContent).toEqual(
      'Sidepanel page'
    );
  });
});
