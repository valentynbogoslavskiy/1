import React, { FC, useEffect } from 'react';

import { NextPageContext } from 'next';
import Head from 'next/head';

import { observer } from 'mobx-react';

// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { MainLayout } from '@layouts';
import { FullPageImageBanner } from '@components/full-page-image-banner';
import { H1 } from '@uikit';

import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';

import { useStore } from 'stores';

// examples
import {
  CardsExamples,
  CardsSpecifiedExamples,
  CardsReviewExamples,
  CardsNoImageExample,
  CardsReversedInlineExamples,
  CitatesExamples,
  DownloadFilesExamples,
  NewsListExamples,
} from '@components/examples/uiexamples';
import { StrechedColoredBlock } from '@components/stretched-colored-block';

interface HomePageProps {
  homeContentSSR: HomePageContent | null;
}

interface HomePageContent {
  title: string;
  header: HeaderProps;
  footer: FooterProps;
  /* eslint-disable */
  // @ts-ignore
  main: any;
}

// !! this approach with global store using, common layout and main content are using the mobx global store to render page content
// pages/login page also is using the same approach, all another pages are using approach with data for page rendering which are received from SSR
const Home: FC<HomePageProps> = observer(({ homeContentSSR }) => {
  const { header, footer, contentLoaded, setCommonPageContent } = useStore('CommonPageContentStore');
  const { main, title, getPageContent, setPageContent } = useStore('MainPageContentStore');
  useEffect(() => {
    async function loadContent() {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/home`); //!!@todo should be changed on proper url
      // const response = await ApiService.fetchPageContent({ pageID: 'home' });
      getPageContent({ pageID: 'home' });
      // const json = await response.json();
      if (!contentLoaded) setCommonPageContent({ header, footer });
    }

    if (!homeContentSSR) {
      // console.log('!!! HOME !!!! LOAD CONTENT ON THE CLIENT SIDE OF THE HOME PAGE', homeContentSSR);
      loadContent();
    } else {
      setCommonPageContent({ header: homeContentSSR?.header, footer: homeContentSSR?.footer });
      setPageContent({ main: homeContentSSR.main, title: homeContentSSR.title });
    }
  }, []);

  if (!contentLoaded) {
    return <MainLayout commonContentLoaded={contentLoaded} headerContent={header} footerContent={footer} />;
  }
  return (
    <>
      <MainLayout headerContent={header} footerContent={footer} commonContentLoaded={contentLoaded}>
        <Head>
          <title>{title}</title>
          {/* keywords and description should be sent by server */}
          <meta name='keywords' content='next,javascript,nextjs,react' />
          <meta name='description' content='Home page of the ist company' />
          {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' /> */}
        </Head>
        <FullPageImageBanner
          backgroundImageName={'placeholder'}
          subtitle={'for physical, chemical and biological sensors'}
          cta={'Get to know our company'}
        >
          <H1 component='h1' variant='h4'>
            Your supplier and partner
          </H1>
        </FullPageImageBanner>
        <Container maxWidth='lg'>
          <CardsExamples />
          <CardsSpecifiedExamples />
          <CardsReviewExamples />
          <CardsNoImageExample />
        </Container>
        <StrechedColoredBlock>
          <CardsReversedInlineExamples />
        </StrechedColoredBlock>
        <Container maxWidth='lg'>
          <CitatesExamples />
          <DownloadFilesExamples />
          <NewsListExamples />
        </Container>
      </MainLayout>
    </>
  );
});

/* eslint-disable */
// @ts-ignore
Home.getInitialProps = async ({ req }: NextPageContext): Promise<HomePageProps> => {
  if (!req) return { homeContentSSR: null };
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/home`);
  const homeContentSSR: HomePageContent = await response.json();
  return { homeContentSSR: homeContentSSR };
};

export default Home;

// !!! if you want to set up react-router inside the nextjs application see here https://colinhacks.com/essays/building-a-spa-with-nextjs
