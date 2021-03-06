import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid #8bd5cb;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <>
        <Container>{title}</Container>
      </>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
