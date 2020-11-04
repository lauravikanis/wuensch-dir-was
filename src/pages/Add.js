import React from 'react';
import Button from '../components/Button';
import WishElement from '../components/WishElement';
import WishListItem from '../components/WishListItem';

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
