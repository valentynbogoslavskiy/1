import { observable, action, makeObservable } from 'mobx';

import { HeaderProps } from '@interfaces/header';
import { FooterProps } from '@interfaces/footer';
import { ErrorWithStatus } from '@interfaces/error';

import { headerInitialProps } from './header-initial-props';
import { footerInitialProps } from './footer-initial-props';

export class CommonPageContentStore {
  pageLoading = true;
  contentLoaded = false;
  pageError: ErrorWithStatus | null = null;

  header: HeaderProps = headerInitialProps;
  footer: FooterProps = footerInitialProps;
  title = '';
  metaKeyWords: string[] = [];

  setCommonPageContent = ({ header, footer }: { header: HeaderProps; footer: FooterProps }): void => {
    this.header = header;
    this.footer = footer;
    this.contentLoaded = true;
  };
  // if you need to update header's data call this action, if contentLoaded = false then header data in the store will be updated once you go from one page ot another
  setContentLoaded = (contentLoaded: boolean): void => {
    this.contentLoaded = contentLoaded;
  };
}

export default makeObservable(new CommonPageContentStore(), {
  header: observable,
  footer: observable,
  title: observable,
  metaKeyWords: observable,

  setCommonPageContent: action,
});
