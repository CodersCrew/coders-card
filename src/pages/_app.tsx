import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { Layout } from '@/components/Layout';
import { PageHead } from '@/components/PageHead';
import { ThemeProvider } from '@/utils/theme';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <PageHead />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
