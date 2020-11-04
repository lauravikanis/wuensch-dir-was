import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../components/Button';
// import WishListItem from '../components/WishListItem';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function welcome() {
  return (
    <ListContainer>
      <Link to="Laura">Laura&apos;s Wishlist</Link>
      <Link to="Name2">Name2&apos;s Wishlist</Link>
      <Link to="/add">
        <Button>+</Button>
      </Link>
    </ListContainer>
  );
}
