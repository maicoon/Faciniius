import React, {
  useRef,

  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';

interface ErrorInput {
  message: string;
  isError: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error?: ErrorInput;
  icon?: React.ComponentType<IconBaseProps>;
}

export function InputRadio({ name, label, error, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className='containerRadio'>
      <label htmlFor={name}>{label}</label>
      <div className='contentRadio'>

        <input
          type='radio'
          ref={inputRef}
          checked
          {...rest}
        />
        
      </div>
    </div>
  );
}