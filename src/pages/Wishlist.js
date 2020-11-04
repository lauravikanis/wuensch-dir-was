import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { getListsById } from '../api/lists';
// import WishListItem from '../components/WishListItem';
// import WishListItem from '../components/WishListItem';

const Wishlist = () => {
  const { id } = useParams();
  const [listItem, setlistItem] = useState(null);

  useEffect(async () => {
    const newlist = await getListsById(id);
    setlistItem(newlist);
  }, []);

  return (
    <div>
      !{id} is not used!
      <p>{listItem?.title}</p>
      WishlistItem
    </div>
  );
};
export default Wishlist;
