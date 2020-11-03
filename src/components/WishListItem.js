import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Button from './Button';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid forestgreen;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <form>
        <Container>{title}</Container>
      </form>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
