import React from 'react';
import Home from './pages/Home';
import Layout from './containers/Layout';

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
