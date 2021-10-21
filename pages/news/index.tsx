import React, { FC, useEffect, useState } from 'react';

import Head from 'next/head';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { MainLayout } from '@layouts';

import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';

import { useStore } from 'stores';

interface NewsPageProps {
  props: NewsPageContent | null;
}

interface NewsPageContent {
  title: string;
  header: HeaderProps;
  footer: FooterProps;
}

// !! this approach without MobX global store using, common layout and main content are received from the SSR
// all pages except pages/index(home page) and pages/login/ are using SSR data for content rendering
const News: FC<NewsPageContent> = (newsContentSSR) => {
  const [pageContent, setPageContent] = useState(newsContentSSR);
  const { header, footer, contentLoaded, setCommonPageContent } = useStore('CommonPageContentStore');
  useEffect(() => {
    if (newsContentSSR && !contentLoaded) setCommonPageContent({ header, footer });
  }, []);

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
};

// if you preffer getInitialProps function + MobX store see pages/index or pages/login/ pages
//**!!! for static content page use getStaticProps but for the dynamic content page better use getServerSideProps instead https://nextjs.org/docs/basic-features/data-fetching */
export async function getServerSideProps(): Promise<NewsPageProps | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/joinus`);
  const newsContentSSR: NewsPageContent = await response.json();
  return { props: newsContentSSR };
}

export default News;

// !!! if you want to set up react-router inside the nextjs application see here https://colinhacks.com/essays/building-a-spa-with-nextjs
