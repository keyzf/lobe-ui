import { Input as AntInput, InputProps as AntdInputProps } from 'antd';
import { TextAreaProps as AntdTextAreaProps } from 'antd/es/input/TextArea';
import { forwardRef, memo } from 'react';
import { useStyles } from './style';
export interface InputProps extends AntdInputProps {
  ref?: any;
  type?: 'ghost' | 'block';
}

export const Input = memo<InputProps>(
  forwardRef(({ className, type = 'ghost', ...props }, ref) => {
    const { styles, cx } = useStyles({ type });
    return <AntInput ref={ref} className={cx(styles.input, className)} {...props} />;
  }),
);

export interface TextAreaProps extends AntdTextAreaProps {
  ref?: any;
  type?: 'ghost' | 'block';
}

export const TextArea = memo<TextAreaProps>(
  forwardRef(({ className, type = 'ghost', ...props }, ref) => {
    const { styles, cx } = useStyles({ type });
    return <AntInput.TextArea ref={ref} className={cx(styles.textarea, className)} {...props} />;
  }),
);
