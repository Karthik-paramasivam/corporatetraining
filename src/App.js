import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './Nav';
import ModalForm from './ModalForm';
import Home from './Home';
import React, { useRef, useEffect, useState } from "react"

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    
  };

  return (
    <div>
      <NavMenu handleModalOpen={handleModalOpen} />
      <ModalForm isModalVisible={isModalVisible} handleModalClose={handleModalClose} />
      <Home  handleModalOpen={handleModalOpen} />
    </div>
  );
}

export default App;
