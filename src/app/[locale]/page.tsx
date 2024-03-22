import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

export default function Home({params: {locale}}: any) {
  const t = useTranslations('Index');
  unstable_setRequestLocale(locale);

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}
