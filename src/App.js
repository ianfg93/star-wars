import React from 'react';
import './App.css';
import MyProvider from './context/myProvider';
import Table from './component/Table';
import Forms from './component/Forms';

function App() {
  return (
    <MyProvider>
      <Forms />
      <Table />
    </MyProvider>
  );
}

export default App;
