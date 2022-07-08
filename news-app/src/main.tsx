import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { routes } from '@/modules';
import messages from '@/messages';
import { LOCALES } from '@/shared/constants';

const Main = () => {
  const locale = LOCALES.UA;
  const appRoutes = routes();

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultLocale={LOCALES.UA}
    >
      <BrowserRouter>{appRoutes}</BrowserRouter>
    </IntlProvider>
  );
};

ReactDOM.render(<Main />, document.querySelector('#app'));
