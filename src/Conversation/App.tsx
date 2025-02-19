import { Typography } from 'antd';
import isEqual from 'fast-deep-equal';
import { FC, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import ChatList from './ChatList';
import InputArea from './InputArea';

import { useStore } from '@/Chat/store';

export interface AppProps {
  /**
   * @description Whether the component is in readonly mode.
   * @default false
   */
  readonly?: boolean;
  /**
   * @description Whether to include system messages in the chat.
   * @default true
   */
  includeSystem?: boolean;
}

const ChatContainer: FC<AppProps> = ({ readonly, includeSystem = true }) => {
  const [showInput, title, description] = useStore(
    (s) => [!s.changingSystemRole, s.title, s.description],
    isEqual,
  );

  if (readonly) return <ChatList readonly includeSystem={includeSystem} />;

  return (
    <Flexbox width={'100%'} height={'100%'} gap={24}>
      {title || description ? (
        <Flexbox>
          <Typography.Title level={4}>{title}</Typography.Title>
          <Typography.Text type={'secondary'}>{description}</Typography.Text>
        </Flexbox>
      ) : null}
      <ChatList includeSystem={includeSystem} />
      {showInput ? <InputArea /> : null}
    </Flexbox>
  );
};

export default memo(ChatContainer);
