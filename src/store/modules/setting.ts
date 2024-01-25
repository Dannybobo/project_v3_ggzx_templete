import { defineStore } from 'pinia';

export const useLayoutSettingStore = defineStore('LayoutSetting', {
  state: () => {
    return { isFold: false, refresh: false };
  },
});
