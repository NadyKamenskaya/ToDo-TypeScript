import './assets/application.scss';
import './assets/index.css';

import { createRoot } from 'react-dom/client';

import init from './init';

const app = async () => {
  const root = createRoot(document.getElementById('root') as HTMLElement);
  root.render(await init());
};

app();
