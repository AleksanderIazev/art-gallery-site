/* eslint-disable react/prop-types */
import css from './Input.module.scss';
import cn from 'classnames';

export const Input = ({
  value,
  onChange,
  type,
  placeholder,
  id,
  label,
  name,
}) => {
  return (
    <div className={cn(css.input__container)}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={cn(css.input__styles)}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        name={name}
      />
    </div>
  );
};
