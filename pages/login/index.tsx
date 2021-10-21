import React, { FC, useEffect } from 'react';

import { NextPageContext } from 'next';
import Head from 'next/head';

import { observer } from 'mobx-react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { MainLayout } from '@layouts';
import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';

import { useStore } from 'stores';

interface LoginPageProps {
  loginContentSSR: LoginPageContent | null;
}

interface LoginPageContent {
  title: string;
  header: HeaderProps;
  footer: FooterProps;
  /* eslint-disable */
  // @ts-ignore
  main: any;
}
// !! this approach with global store using, common layout and main content are using the mobx global store to render page content
// pages/index(home page) page also is using the same approach, all another pages are using approach with data for page rendering which are received from SSR
const Login: FC<LoginPageProps> = observer(({ loginContentSSR }) => {
  const { header, footer, contentLoaded, setCommonPageContent } = useStore('CommonPageContentStore');
  const { main, getPageContent, title } = useStore('MainPageContentStore');
  useEffect(() => {
    async function loadContent() {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/home`); //!!@todo should be changed on proper url
      // const response = await ApiService.fetchPageContent({ pageID: 'home' });
      getPageContent({ pageID: 'home' });
      // const json = await response.json();
      if (!contentLoaded) setCommonPageContent({ header, footer });
    }

    if (!loginContentSSR) {
      // console.log('!!! LOGIN !!!! LOAD CONTENT ON THE CLIENT SIDE OF THE LOGIN PAGE', loginContentSSR);
      loadContent();
    } else {
      setCommonPageContent({ header: loginContentSSR?.header, footer: loginContentSSR?.footer });
    }
  }, []);

  if (!contentLoaded) {
    return <MainLayout commonContentLoaded={contentLoaded} headerContent={header} footerContent={footer} />;
  }
  return (
    <>
      <MainLayout commonContentLoaded={contentLoaded} headerContent={header} footerContent={footer}>
        <Head>
          <title>{title}</title>
          <meta name='keywords' content='next,javascript,nextjs,react' />
          <meta name='description' content='Home page of the ist company' />
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' /> */}
        </Head>
        <Box>
          <Typography component='h2' noWrap>
            hello
          </Typography>
          <span>Just simple text here</span>
        </Box>
      </MainLayout>
    </>
  );
});

/* eslint-disable */
// @ts-ignore
Login.getInitialProps = async ({ req }: NextPageContext): Promise<LoginPageProps> => {
  if (!req) return { loginContentSSR: null };
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/login`);
  const loginprops: LoginPageContent = await response.json();
  return { loginContentSSR: loginprops };
};

export default Login;
