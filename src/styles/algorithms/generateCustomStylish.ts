import { LobeCustomStylish } from '@/types/customStylish';
import { GetCustomStylish } from 'antd-style';
import { rgba } from 'polished';

export const generateCustomStylish: GetCustomStylish<LobeCustomStylish> = ({
  css,
  token,
  isDarkMode,
}) => {
  return {
    clickableText: css`
      cursor: pointer;
      color: ${token.colorTextSecondary};

      &:hover {
        color: ${token.colorText};
      }
    `,
    resetLinkColor: css`
      color: inherit;

      &:hover,
      &:active {
        color: inherit;
      }
    `,

    heroButtonGradient: css`
      background: linear-gradient(90deg, ${token.gradientColor1} 0%, ${token.gradientColor2} 100%);
    `,

    heroGradient: css`
      background-image: ${token.gradientHeroBgG};
      background-size: 300% 300%;
    `,

    heroGradientFlow: css`
      animation: flow 5s ease infinite;

      @keyframes flow {
        0% {
          background-position: 0 0;
        }

        50% {
          background-position: 100% 100%;
        }

        100% {
          background-position: 0 0;
        }
      }
    `,

    heroBlurBall: css`
      will-change: transform;

      background: linear-gradient(
        135deg,
        ${token.gradientColor3} 0%,
        ${token.gradientColor1} 30%,
        ${token.red} 70%,
        ${token.cyan} 100%
      );
      background-size: 200% 200%;
      filter: blur(69px);

      animation: glow 10s ease infinite;

      @keyframes glow {
        0% {
          background-position: 0 -100%;
        }

        50% {
          background-position: 200% 50%;
        }

        100% {
          background-position: 0 -100%;
        }
      }
    `,

    iconGradientDefault: css`
      background-image: radial-gradient(
        100% 100% at 50% 0,
        ${rgba(token.colorSolid, 0.2)} 0,
        ${rgba(token.colorSolid, 0.1)} 100%
      );
    `,

    blur: css`
      backdrop-filter: saturate(180%) blur(10px);
    `,

    markdown: css`
      color: ${isDarkMode ? token.colorTextSecondary : token.colorText};

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-weight: 600;
      }

      p {
        margin: 20px auto;

        font-size: 14px;
        line-height: 1.8;
        color: ${token.colorText};
        text-align: justify;
        word-wrap: break-word;
      }

      blockquote {
        margin: 16px 0;
        padding: 0 12px;
        p {
          font-style: italic;
          color: ${token.colorTextDescription};
        }
      }

      p:not(:last-child) {
        margin-bottom: 1em;
      }

      a {
        color: ${token.colorLink};

        &:hover {
          color: ${token.colorLinkHover};
        }

        &:active {
          color: ${token.colorLinkActive};
        }
      }

      img {
        max-width: 100%;
      }

      pre {
        border-radius: ${token.borderRadius}px;
      }

      > :not([data-code-type='highlighter']) code {
        padding: 2px 6px;

        font-size: ${token.fontSizeSM}px;
        color: ${isDarkMode ? token.cyan9A : token.cyan10A};

        background: ${isDarkMode ? token.cyan1A : token.cyan3A};
        border: 1px solid ${isDarkMode ? token.cyan1A : token.cyan4A};
        border-radius: ${token.borderRadiusSM}px;
      }

      table {
        border-spacing: 0;

        width: 100%;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding: 8px;

        border: 1px solid ${token.colorBorderSecondary};
        border-radius: ${token.borderRadius}px;
      }

      th,
      td {
        padding-block-start: 10px;
        padding-block-end: 10px;
        padding-inline-start: 16px;
        padding-inline-end: 16px;
      }

      thead {
        tr {
          th {
            background: ${token.colorFillTertiary};
            &:first-child {
              border-top-left-radius: ${token.borderRadius}px;
              border-bottom-left-radius: ${token.borderRadius}px;
            }
            &:last-child {
              border-top-right-radius: ${token.borderRadius}px;
              border-bottom-right-radius: ${token.borderRadius}px;
            }
          }
        }
      }

      ul li {
        line-height: 1.8;
      }
    `,
  };
};
