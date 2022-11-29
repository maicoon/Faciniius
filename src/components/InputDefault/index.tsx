import React, {
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

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

export function InputDefault({ name, label, error, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <div className='containerInput'>
      <label htmlFor={name}>{label}</label>

      <div className='contentInput'>

        <div className="leftInputElement">
          {Icon && <Icon color='rgba(204, 204, 204, 1)' />}
        </div>

        <input
          className={`${Icon ? 'isIcon' : ''}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          id={name}
          {...rest}
        />

        
      </div>
    </div>
  );
}