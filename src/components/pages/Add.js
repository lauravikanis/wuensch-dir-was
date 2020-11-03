import React from 'react';
import Button from '../Button';
import WishElement from '../WishElement';
import WishListItem from '../WishListItem';

function Add() {
  return (
    <div>
      <h3>Wunsch von:</h3>
      <WishListItem>Name</WishListItem>
      <WishElement /> <Button>+</Button>
    </div>
  );
}

export default Add;
