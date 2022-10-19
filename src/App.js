import React from 'react';
import './App.css';
import MyProvider from './context/myProvider';
import Table from './component/Table';

function App() {
  return (
    <MyProvider>
      <Table />
    </MyProvider>
  );
}

export default App;
