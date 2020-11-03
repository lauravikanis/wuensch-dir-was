import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import WishListItem from '../WishListItem';

export default function welcome() {
  return (
    <div>
      <WishListItem title="Name" />
      <Link to="/Add">
        <Button>+</Button>
      </Link>
    </div>
  );
}
