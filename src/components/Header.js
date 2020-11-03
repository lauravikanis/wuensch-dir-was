import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const MainHeadline = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export default function Header() {
  return (
    <div>
      <MainHeadline>
        <Link to="/Welcome">
          <span role="img" aria-label="christmastree">
            🎄
          </span>
        </Link>
        Wishlist
      </MainHeadline>
    </div>
  );
}
