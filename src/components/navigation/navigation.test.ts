import { render, screen, cleanup } from '@testing-library/svelte';
import '@testing-library/jest-dom';
import Navigation from './Navigation.svelte';

afterEach(() => cleanup());

async function renderNav() {
  const nav = render(Navigation);

  await new Promise(setImmediate);

  return nav;
}

test('should render navigation', async () => {
  await renderNav();

  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
