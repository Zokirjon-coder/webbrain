import React from 'react';
import { CONTAINER } from './style'
import Header from '../components/generic/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { dataMenu } from '../utils/dataMenu';
import Footer from '../components/Footer';

const Root = () => {

  return (
    <div>
      <Router>
        <CONTAINER>
          <Header />

          <Routes>
            {
              dataMenu.map(({ pathname, id, Element }) => <Route key={id} path={pathname} element={<Element title={pathname} />} />)
            }
            <Route path='/' element={<Navigate to='/asosiy' />} />
            <Route path='*' element={<h1>page not found</h1>} />
          </Routes>

        </CONTAINER>
        <Footer />
      </Router>
    </div>
  );
};

export default Root;
