import React from 'react';
import { MobXProviderContext } from 'mobx-react';

import CommonPageContentStore from './common-page-content.store';
import MainPageContentStore from './main-page-content.store';
import UserStore from './user.store';

export default {
  CommonPageContentStore,
  UserStore,
  MainPageContentStore,
};

/* eslint-disable */
// @ts-ignore
export function useStores() {
  return React.useContext(MobXProviderContext);
}
/* eslint-disable */
// @ts-ignore
export function useStore(store: string) {
  return React.useContext(MobXProviderContext)[store];
}
