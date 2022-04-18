import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import Global from './Styles/GlobalStyles';

import Pasta from './Pages/Pasta';
import Pizza from './Pages/Pizza';
import Thai from './Pages/Thai';

import Header from './Components/Header';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [pasta, setPasta] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [thai, setThai] = useState([]);

  const location = useLocation();

  const getPasta = async () => {
    const data = JSON.parse(localStorage.getItem('pasta'));
    if (!data) {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=ef67c4b4972a4922bce4cc5b55f9ab7e'
      );
      setPasta(response.data.results);
      localStorage.setItem('pasta', JSON.stringify(response.data.results));
    } else {
      setPasta(data);
    }
  };

  const getPizza = async () => {
    const data = JSON.parse(localStorage.getItem('pizza'));
    if (!data) {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?query=pizza?&apiKey=ef67c4b4972a4922bce4cc5b55f9ab7e'
      );
      console.log(response.data.results);
      setPizza(response.data.results);
      localStorage.setItem('pizza', JSON.stringify(response.data.results));
    } else {
      setPizza(data);
    }
  };

  const getThai = async () => {
    const data = JSON.parse(localStorage.getItem('thai'));
    if (!data) {
      const response = await axios.get(
        'https://api.spoonacular.com/recipes/complexSearch?query=thai?&apiKey=ef67c4b4972a4922bce4cc5b55f9ab7e'
      );
      console.log(response.data.results);
      setThai(response.data.results);
      localStorage.setItem('thai', JSON.stringify(response.data.results));
    } else {
      setThai(data);
    }
  };

  useEffect(() => {
    getPasta();
    getPizza();
    getThai();
  }, []);
  return (
    <>
      <Global />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path='/' element={<Pasta items={pasta} />} />
          <Route path='/pizza' element={<Pizza items={pizza} />} />
          <Route path='/thai' element={<Thai items={thai} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
