import Burger from '@/components/Burger';
import GithubButton from '@/components/GithubButton';
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSwitch from '@/slots/LangSwitch';
import Logo from '@/slots/Logo';
import Navbar from '@/slots/Navbar';
import SearchBar from '@/slots/SearchBar';
import { useSiteStore } from '@/store/useSiteStore';
import { useResponsive } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import { useStyle } from './style';

const Header = memo(() => {
  const hasHeader = useSiteStore((s) => !!s.routeMeta.frontmatter);

  const { mobile } = useResponsive();
  const { styles } = useStyle();

  return !hasHeader ? null : (
    <header className={styles.header}>
      <Flexbox
        horizontal
        distribution={'space-between'}
        align={'center'}
        width={'auto'}
        className={styles.content}
      >
        {mobile ? (
          <>
            <Flexbox>
              <Burger />
            </Flexbox>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox>
              <ThemeSwitch />
            </Flexbox>
          </>
        ) : (
          <>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox style={{ marginLeft: 48, alignSelf: 'end' }}>
              <Navbar />
            </Flexbox>
            <section className={styles.right}>
              <div />
              <Flexbox
                gap={8}
                horizontal
                align={'center'}
                className="dumi-default-header-right-aside"
              >
                <SearchBar />
                <LangSwitch />
                <GithubButton />
                <ThemeSwitch />
              </Flexbox>
            </section>
          </>
        )}
      </Flexbox>
    </header>
  );
});

export default Header;
