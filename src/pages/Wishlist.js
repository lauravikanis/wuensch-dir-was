import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { deleteListById, getListsById } from '../api/lists';
import DangerButton from '../components/DangerButton';

const WishlistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b5525c;
  color: white;
  border: 1px solid #b5525c;
  border-radius: 25px;
  padding-bottom: 2rem;

  ul {
    padding-inline-start: 0;
  }

  h2 {
    border-bottom: 1px solid white;
    padding-bottom: 0.75rem;
    width: 80%;
    text-align: center;
  }
  li {
    padding: 0.75rem;
    font-size: 1.25rem;
    list-style: none;
    text-align: center;
  }
`;

const Wishlist = () => {
  const { listId } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const newList = await getListsById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <h3>Loading...</h3>;
  }

  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <WishlistContainer>
      <h2>{list.title}s Liste</h2>
      <ul>
        {list.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <DangerButton type="button" onClick={handleDelete}>
        ✕
      </DangerButton>
    </WishlistContainer>
  );
};
export default Wishlist;
