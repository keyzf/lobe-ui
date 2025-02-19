import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  search: css`
    position: relative;
    max-width: 100%;
  `,
  input: css`
    position: relative;
    padding: 0 8px 0 12px;
  `,
  tag: css`
    position: absolute;
    z-index: 5;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  `,

  icon: css`
    color: ${token.colorTextPlaceholder};
  `,
}));
