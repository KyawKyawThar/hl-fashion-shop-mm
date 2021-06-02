import React from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory.scss';

class Directory extends React.Component {
  state = {
    sections: [
      //https://i.ibb.co/KVVjYrP/md-Dal-UYITm-Sz-Tth-EZsgl.jpg
      //[url=https://ibb.co/mBP738r][img]https://i.ibb.co/cvsdjLK/bag.jpg[/img][/url]

      {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/M6y7cQ6/hat.png',
        id: 1,
        linkUrl: 'hats',
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/pwTZMRk/jacket.png',
        id: 2,
        linkUrl: 'jackets',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/bB0VnKT/sneaker.png',
        id: 3,
        linkUrl: 'sneakers',
      },
      {
        title: 'womens',
        imageUrl:
          'https://i.ibb.co/0fRNW3s/freestocks-3-Q3ts-J01nc-unsplash.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'womens',
      },

      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/drgn88x/boy.png',
        size: 'large',
        id: 5,
        linkUrl: 'mens',
      },
    ],
  };

  render() {
    const { sections } = this.state;
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
