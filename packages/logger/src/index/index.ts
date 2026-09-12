import { createBrowserDocument } from '@clack/browser';
createBrowserDocument(document.getElementById('root'), () => {
  import('./index.html');
});
