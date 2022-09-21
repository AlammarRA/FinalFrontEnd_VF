import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import OrderDetails from './OrderDetails';
import Calendar from './Calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
    
    <BrowserRouter>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
          <Route path="/" element={<OrderDetails />} />
      </Routes>
    </BrowserRouter>

    </ChakraProvider>
  );
}

export default App;
