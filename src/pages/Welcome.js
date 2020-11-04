import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../components/Button';
// import WishListItem from '../components/WishListItem';
import { getLists } from '../api/lists';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function welcome() {
  const [lists, setlists] = useState(null);

  useEffect(async () => {
    const newlists = await getLists();
    setlists(newlists);
  }, []);

  return (
    <ListContainer>
      {lists?.map((list) => (
        <Link key={list.id} to={`/${list.id}`}>
          {list.title}
        </Link>
      ))}

      <Link to="/add">
        <Button>+</Button>
      </Link>
    </ListContainer>
  );
}
