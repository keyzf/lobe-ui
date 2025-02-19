import { Space, message } from 'antd';
import copy from 'copy-to-clipboard';
import { memo } from 'react';
import { alphaBg, useStyles } from './style';

export interface IScaleRow {
  name: string;
  title: 'light' | 'lightA' | 'dark' | 'darkA';
  scale: string[];
}

const ScaleRow = memo<IScaleRow>(({ name, title, scale }) => {
  const { styles } = useStyles();

  let style = {};
  let isAlpha = false;

  switch (title) {
    case 'lightA':
      style = { backgroundColor: '#fff', background: alphaBg.light };
      isAlpha = true;
      break;
    case 'darkA':
      style = { backgroundColor: '#000', background: alphaBg.dark };
      isAlpha = true;
      break;
    default:
      break;
  }

  return (
    <Space size={2}>
      <div className={styles.scaleRowTitle} key={title}>
        <div className={styles.text}>{title}</div>
      </div>
      {scale.map((color, index) => {
        if (index === 0 || index === 12) return null;
        return (
          <div
            className={styles.scaleBox}
            key={index}
            title={color}
            style={style}
            onClick={() => {
              const content = `token.${name}${index}${isAlpha ? 'A' : ''} /* ${color} */`;
              copy(content);
              message.success(content);
            }}
          >
            <div className={styles.scaleItem} style={{ backgroundColor: color }} />
          </div>
        );
      })}
    </Space>
  );
});

export default ScaleRow;
