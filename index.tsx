import { createRoot } from 'react-dom/client';
import { App } from '~/src/app';

const root = document.body as HTMLElement;

createRoot(root).render(<App />);
