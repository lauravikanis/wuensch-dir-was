import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import WishListItem from '../components/WishListItem';

const Wishlist = () => {
  const { name } = useParams();

  return (
    <div>
      <Link to="/">Back</Link>
      <p>{name}</p> WishlistItem
    </div>
  );
};
export default Wishlist;
