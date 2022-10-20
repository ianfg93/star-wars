import React from 'react';
import MyProvider from './context/myProvider';
import './App.css';
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
