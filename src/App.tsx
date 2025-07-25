import React from "react";
import { useTranslation } from 'react-i18next';
import { Product } from "./components/Product";

const MainApp = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lng: string) => i18n.changeLanguage(lng);

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">JR&RR</h1>
        <div className="space-x-2">
          <button onClick={() => changeLang('az')}>AZ</button>
          <button onClick={() => changeLang('en')}>EN</button>
        </div>
      </header>
      <main className="p-4">
        <h2 className="text-2xl mb-4">{t('welcome')}</h2>
        <Product />
      </main>
    </div>
  );
};

export default MainApp;