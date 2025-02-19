import { contentBottomSel, useSiteStore } from '@/store';
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import Linker from './Linker';

const ContentFooter = memo(() => {
  const { prev, next } = useSiteStore(contentBottomSel, isEqual);
  const { mobile } = useResponsive();
  return (
    <Flexbox
      horizontal={!mobile}
      gap={mobile ? 12 : 0}
      distribution={'space-between'}
      style={{
        margin: mobile ? 12 : 0,
      }}
    >
      {prev ? <Linker type={'prev'} {...prev} /> : <div />}
      {next ? <Linker type={'next'} {...next} /> : <div />}
    </Flexbox>
  );
});

export default ContentFooter;
