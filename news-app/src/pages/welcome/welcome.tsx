import React from 'react';
import { useIntl } from 'react-intl';

const Welcome = () => {
  const intl = useIntl();

  return (
    <>
      Welcome
      {intl.formatMessage({
        id: 'welcome.title',
      })}
    </>
  );
};

export default Welcome;
