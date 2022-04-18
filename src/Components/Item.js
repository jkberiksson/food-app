import { motion } from 'framer-motion';
import styled from 'styled-components';

const Item = ({ item }) => {
  return (
    <StyledItem
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      exit={{
        scale: 0,
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}>
      <img src={item.image} alt='image' />
      <div>
        <h3>{item.title}</h3>
      </div>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled(motion.div)`
  border-radius: 1rem;
  overflow: hidden;
  height: 200px;
  width: 100%;
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;

    h3 {
      padding: 1rem;
      color: #eee;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
