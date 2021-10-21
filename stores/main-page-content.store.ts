import { observable, action, makeObservable, runInAction } from 'mobx';

import { ErrorWithStatus } from '@interfaces/error';

import { ApiService } from '@services/api-service/';

export class MainPageContentStore {
  pageLoading = true;
  pageError: ErrorWithStatus | null = null;
  /* eslint-disable */
  // @ts-ignore
  main: any = null;

  title = '';
  metaKeyWords: string[] = [];

  setPageContent = ({ main, title }: { main: any, title: string }): void => {
    this.main = main;
    this.title = title;
  };

  getPageContent = async ({ pageID }: { pageID: string }): Promise<void> => {
    runInAction(() => {
      this.pageLoading = true;
      this.pageError = null;
    });

    try {
      // eslint-disable-next-line
      const data = await ApiService.fetchPageContent({ pageID: pageID });
      this.main = data.main;
      this.title = data.title;
      // this.metaKeyWords = data.metaKeyWords;

      runInAction(() => {
        this.pageLoading = false;
      });
    } catch (error) {
      if ((error as ErrorWithStatus).status === 401) {
        // eslint-disable-next-line no-console
        console.log('something went wrong');
      }

      runInAction(() => {
        this.pageError = error as ErrorWithStatus;
        this.pageLoading = false;
      });

      throw error;
    }
  };
}

export default makeObservable(new MainPageContentStore(), {
  main: observable,
  title: observable,
  metaKeyWords: observable,
  getPageContent: action,
  setPageContent: action,
});
