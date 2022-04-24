import React from 'react';
import Layout from './Layouts';
import { Navigation } from './Layouts/Router';
import Sidebar from './Layouts/Sidebar';

function App() {
  return (
      <Layout>
        <Navigation/>
      </Layout>
  )
}

export default App