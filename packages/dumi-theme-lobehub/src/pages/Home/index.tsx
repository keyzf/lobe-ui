import { useStyles } from '@/pages/Docs/styles';
import Features from '@/slots/Features';
import Footer from '@/slots/Footer';
import Header from '@/slots/Header';
import Hero from '@/slots/Hero';
import { siteTitleSel, useSiteStore } from '@/store';
import { Helmet } from 'dumi';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const Home = memo(() => {
  const siteTitle = useSiteStore(siteTitleSel);
  const { styles } = useStyles();
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Header />
      <main>
        <div className={styles.spacing} />
        <Flexbox align={'center'} gap={80} style={{ minHeight: '60vh' }}>
          <Hero />
          <Features />
        </Flexbox>
      </main>
      <Footer />
    </>
  );
});

export default Home;
