import './form-input.scss';

const FormInput = ({ onHandleChange, label, ...otherProps }) => {
  return (
    <div className='group'>
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          }form-input-label`}>
          {label}
        </label>
      ) : null}
      <input className='form-input' onChange={onHandleChange} {...otherProps} />
    </div>
  );
};

export default FormInput;
