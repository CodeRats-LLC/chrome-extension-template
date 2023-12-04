import { render, screen } from '@testing-library/preact';
import DevTools from './DevTools';

describe('DevTools page', () => {
  it('should render the DevTools page', () => {
    render(<DevTools />);
    expect(screen.getByTestId('devtools_text').textContent).toEqual(
      'Dev Tools panel'
    );
  });
});
