import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '../components/Button';
import { getLists } from '../api/lists';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    /* border-top: 1px solid #b5525c; */
    padding: 0.75rem;
    font-size: 1.25rem;
    width: 80%;
    text-align: center;
  }
  /* a:last-child {
    border-top: none;
  } */
`;

export default function welcome() {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <>
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
    </>
  );
}
