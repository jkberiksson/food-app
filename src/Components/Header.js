import { motion } from 'framer-motion';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
  return (
    <StyledHeader>
      <Button title='Pasta' path='/' />
      <Button title='Pizza' path='/pizza' />
      <Button title='Thai' path='/thai' />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(motion.header)`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
