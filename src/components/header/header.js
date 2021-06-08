import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import { selectCartHidden } from '../../redux/cart/cartSelector';
import { selectCurrentUser } from '../../redux/user/userSelector';
import CartIcon from '../cart-icon/cartIcon';
import CartDropDown from '../cartDropdown/cartDropdown';
import './header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/shop' className='option'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>

      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  //root
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
