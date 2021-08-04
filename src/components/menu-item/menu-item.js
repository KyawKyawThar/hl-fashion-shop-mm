import { withRouter } from 'react-router';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='sub-title'>Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
