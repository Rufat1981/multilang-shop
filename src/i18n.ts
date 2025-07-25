import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  az: {
    translation: {
      welcome: "Xoş gəlmisiniz",
      products: "Məhsullar",
      cart: "Səbət",
      about: "Haqqımızda",
    },
  },
  en: {
    translation: {
      welcome: "Welcome",
      products: "Products",
      cart: "Cart",
      about: "About Us",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'az',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;