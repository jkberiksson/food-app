import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Button = ({ title, icon, path }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <StyledButton
          animate={{
            backgroundColor: isActive ? '#3b863e' : '#121212',
          }}
          transition={{ duration: 0.3 }}>
          {icon}
          <p>{title}</p>
        </StyledButton>
      )}
    </NavLink>
  );
};

export default Button;

const StyledButton = styled(motion.div)`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 2rem;
  cursor: pointer;

  svg {
    color: #eee;
  }

  p {
    color: #eee;
    font-size: 1.2rem;
    margin-top: 0.3rem;
  }
`;
