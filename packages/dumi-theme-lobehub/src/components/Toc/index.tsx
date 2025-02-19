import { AnchorItem } from '@/types';
import { ActionIcon } from '@lobehub/ui';
import { Anchor, Collapse, ConfigProvider } from 'antd';
import { useResponsive, useTheme } from 'antd-style';
import { PanelTopClose, PanelTopOpen } from 'lucide-react';
import { memo, useMemo } from 'react';
import useControlledState from 'use-merge-value';
import { useStyles } from './style';

export interface TocProps {
  /**
   * @title 目录项列表
   */
  items: AnchorItem[];
  /**
   * @title 当前激活的目录项 key 值
   */
  activeKey?: string;
  /**
   * @title 目录项切换的回调函数
   * @param activeKey - 切换后的目录项 key 值
   */
  onChange?: (activeKey: string) => void;
}
const Toc = memo<TocProps>(({ items, activeKey, onChange }) => {
  const [activeLink, setActiveLink] = useControlledState<string>('', {
    value: activeKey,
    onChange,
  });
  const { styles } = useStyles();
  const { mobile } = useResponsive();

  const theme = useTheme();
  const activeAnchor = items.find((item) => item.id === activeLink);

  const linkItems = useMemo(
    () =>
      items.map((item) => ({
        href: `#${item.id}`,
        title: item.title,
        key: item.id,
        children: item.children?.map((child) => ({
          href: `#${child.id}`,
          title: child?.title,
          key: child.id,
        })),
      })),
    [items],
  );

  return (
    (items?.length === 0 ? null : mobile ? (
      <ConfigProvider theme={{ token: { fontSize: 12, sizeStep: 3 } }}>
        <nav className={styles.mobileCtn}>
          <Collapse
            bordered={false}
            ghost
            expandIconPosition={'end'}
            expandIcon={({ isActive }) =>
              isActive ? (
                <ActionIcon
                  icon={PanelTopClose}
                  size={{ fontSize: 16, strokeWidth: 1, blockSize: 24, borderRadius: 3 }}
                />
              ) : (
                <ActionIcon
                  icon={PanelTopOpen}
                  size={{ fontSize: 16, strokeWidth: 1, blockSize: 24, borderRadius: 3 }}
                />
              )
            }
            className={styles.expand}
          >
            <Collapse.Panel
              forceRender
              key={'toc'}
              header={!activeAnchor ? 'TOC' : activeAnchor.title}
            >
              <ConfigProvider theme={{ token: { fontSize: 14, sizeStep: 4 } }}>
                <Anchor
                  onChange={(currentLink) => {
                    setActiveLink(currentLink.replace('#', ''));
                  }}
                  targetOffset={theme.headerHeight + 12}
                  items={linkItems}
                />
              </ConfigProvider>
            </Collapse.Panel>
          </Collapse>
        </nav>
      </ConfigProvider>
    ) : (
      <nav className={styles.container}>
        <h4>Table of Contents</h4>
        <Anchor
          items={linkItems}
          className={styles.anchor}
          targetOffset={theme.headerHeight + 12}
        />
      </nav>
    )) || null
  );
});

export default Toc;
