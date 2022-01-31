import { render, screen } from '@testing-library/react';
import { getMeta } from '../service/meta';
import Meta from './Meta';

xtest('renders metasyntactic', () => {
  render(<Meta store={getMeta()} />);

  ['foo', 'bar', 'qux', 'qux', 'quux', 'corge', 'grault', 'garply', 'waldo', 'fred', 'plugh', 'xyzzy', 'thud'].forEach(
    i => {
      const name = screen.getByText(i);
      expect(name).toBeInTheDocument();
    }
  );

  const baz = screen.getAllByText(/baz/i);
  expect(baz.length).toBe(2);
});
