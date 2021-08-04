const INITIAL_STATE = {
  sections: [
    //https://i.ibb.co/KVVjYrP/md-Dal-UYITm-Sz-Tth-EZsgl.jpg
    //[url=https://ibb.co/mBP738r][img]https://i.ibb.co/cvsdjLK/bag.jpg[/img][/url]

    {
      title: "hats",
      imageUrl: "https://i.ibb.co/M6y7cQ6/hat.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/pwTZMRk/jacket.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/bB0VnKT/sneaker.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/0fRNW3s/freestocks-3-Q3ts-J01nc-unsplash.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },

    {
      title: "mens",
      imageUrl: "https://i.ibb.co/drgn88x/boy.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
