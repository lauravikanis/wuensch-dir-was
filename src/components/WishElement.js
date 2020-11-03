import React from 'react';
import styled from 'styled-components/macro';

const AddWish = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 1rem;

  input {
    margin-left: 2rem;
    border: solid 1px #b5525c;
    border-radius: 25px;
    padding: 0.5rem;
    width: 300px;
  }
`;

export default function WishElement() {
  return (
    <AddWish>
      <span>Das wünsche Ich mir:</span>
      <form>
        <input placeholder="Hier Wunsch eintragen" type="string" />
      </form>
    </AddWish>
  );
}
