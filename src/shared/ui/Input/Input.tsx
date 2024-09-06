import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Input.module.scss';
import { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export enum InputSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: String) => void;
  inputSize?: InputSize;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    inputSize,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Record<string, boolean> = {
    [cls[inputSize]]: true,
  };

  return (
    <div className={classNames('', {}, [className])} {...otherProps}>
      <input
        className={classNames(cls.Input, mods, [className])}
        value={value}
        type={type}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};
