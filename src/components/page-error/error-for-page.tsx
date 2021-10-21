import { FC } from 'react';

import Error from 'next/error';

import Custom500 from 'pages/500';
import Custom404 from 'pages/404';
import Custom401 from 'pages/401';

import HttpStatusCode from '@interfaces/http-status-codes';

interface ErrorPageProps {
  statusCode: HttpStatusCode;
  title?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({ statusCode, title }) => {
  if (statusCode === HttpStatusCode.INTERNAL_SERVER_ERROR) {
    return <Custom500 />;
  }
  if (statusCode === HttpStatusCode.NOT_FOUND) {
    return <Custom404 />;
  }
  if (statusCode === HttpStatusCode.UNAUTHORIZED) {
    return <Custom401 />;
  }
  return statusCode && <Error statusCode={statusCode} title={title} />;
};

export default ErrorPage;
