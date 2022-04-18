import { motion } from 'framer-motion';
import Item from '../Components/Item';
import styled from 'styled-components';

const Pasta = ({ items }) => {
  return (
    <Container>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Container>
  );
};

export default Pasta;

const Container = styled(motion.div)`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
`;
