import React from 'react';
import Button from '../Button';
import WishListItem from '../WishListItem';

function Add() {
  return (
    <div>
      <WishListItem>Name</WishListItem>
      <div>Wish</div>
      <Button>+</Button>
    </div>
  );
}

export default Add;
