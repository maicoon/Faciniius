import React, {
  useRef,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FaAngleDown } from 'react-icons/fa';

interface ErrorInput {
  message: string;
  isError: boolean;
}

interface InputProps extends InputHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  error?: ErrorInput;
  icon?: React.ComponentType<IconBaseProps>;
}

export function SelectDefault({ name, label, error, children, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLSelectElement>(null);

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
    <div className='containerSelect'>
      <label className='labelSelect' htmlFor={name}>{label}</label>

      <div className='contentSelect'>

        <div className="leftInputElement">
          {Icon && <Icon color='#CCCCCC' />}
        </div>

        <select
          className={`${Icon ? 'isIcon' : ''}`}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputRef}
          id={name}
          {...rest}
        >
          {children}
        </select>


        <div className="rightInputElement">
          <FaAngleDown color='rgba(204, 204, 204, 1)' />
        </div>

      </div>
    </div>
  );
}