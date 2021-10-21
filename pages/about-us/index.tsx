import React, { FC, useEffect, useState } from 'react';

import Head from 'next/head';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { MainLayout } from '@layouts';
import { ErrorPage } from '@components/page-error';
import { FullPageImageBanner } from '@components/full-page-image-banner';
import { H1 } from '@uikit';

import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';
import HttpStatusCodes from '@interfaces/http-status-codes';

import { useStore } from 'stores';

interface AboutUsPageProps {
  props: AboutUsPageContentProps;
}

interface AboutUsPageContent {
  title: string;
  header: HeaderProps;
  footer: FooterProps;
}

interface AboutUsPageContentProps {
  aboutUsContentSSR: AboutUsPageContent;
  errorCode: null | HttpStatusCodes;
}
// !! this approach without MobX global store using, common layout and main content are received from the SSR
// all pages except pages/index(home page) and pages/login/ are using SSR data for content rendering
const AboutUs: FC<AboutUsPageContentProps> = ({ aboutUsContentSSR, errorCode }) => {
  const [pageContent, setPageContent] = useState(aboutUsContentSSR);
  const { header, footer, contentLoaded, setCommonPageContent } = useStore('CommonPageContentStore');
  useEffect(() => {
    if (aboutUsContentSSR && !contentLoaded) setCommonPageContent({ header, footer });
  }, []);

  // show error page
  if (errorCode) {
    return <ErrorPage statusCode={errorCode} />;
  }

  if (!pageContent) {
    return <MainLayout footerContent={footer} headerContent={header} commonContentLoaded={false} />;
  }
  return (
    <>
      <MainLayout headerContent={pageContent.header} footerContent={pageContent.footer} commonContentLoaded={true}>
        <Head>
          <title>{pageContent.title}</title>
          <meta name='keywords' content='next,javascript,nextjs,react' />
          <meta name='description' content='Home page of the ist company' />
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' /> */}
        </Head>
        <FullPageImageBanner size='md' backgroundImageName={'placeholder'}>
          <H1 component='h1' variant='h3'>
            About us
          </H1>
        </FullPageImageBanner>
        <Container maxWidth='lg'>
          <Typography component='h2' noWrap>
            hello
          </Typography>
          <span>Just simple text here</span>
        </Container>
      </MainLayout>
    </>
  );
};

// if you preffer getInitialProps function + MobX store see pages/index or pages/login/ pages
//**!!! for static content page use getStaticProps but for the dynamic content page better use getServerSideProps instead https://nextjs.org/docs/basic-features/data-fetching */
export async function getServerSideProps(): Promise<AboutUsPageProps> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/aboutus`);
  const errorCode = response.ok ? null : response.status;
  const aboutUsContentSSR: AboutUsPageContent = await response.json();
  return {
    props: {
      aboutUsContentSSR,
      errorCode,
    },
  };
}

export default AboutUs;

// !!! if you want to set up react-router inside the nextjs application see here https://colinhacks.com/essays/building-a-spa-with-nextjs
