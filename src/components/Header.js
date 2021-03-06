import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const MainHeadline = styled.h1`
  text-align: center;
  color: #b5525c;
`;

export default function Header() {
  return (
    <MainHeadline>
      <Link to="/">
        <span role="img" aria-label="christmastree">
          🎄 Wünsch dir was 🎄
        </span>
      </Link>
    </MainHeadline>
  );
}
