import './custom-buttom.scss';
const CustomButton = ({
  children,
  invented,
  isGoogleSignIn,
  ...otherProps
}) => {
  return (
    <button
      className={`${invented ? 'invented' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}>
      {children}
    </button>
  );
};
export default CustomButton;
