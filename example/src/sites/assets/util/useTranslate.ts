import Locale from '@/locale';

export const currentLang = Locale.currentLang;

export const useTranslate = (object: Record<string, any>) => {
  for (const [key, value] of Object.entries(object)) {
    Locale.merge(key, value);
  }
  // console.log('merge res > ', Locale.languages());
};

export const initSiteLang = () => {
  let lang = Locale.currentLang;
  location.href = location.href.replace('zh-CN', lang).replace('en-US', lang);
};

export const initDemoLang = (val: string) => {
  if (val === 'zh-CN') {
    Locale.use('zh-CN');
  } else {
    Locale.use('en-US');
  }
};