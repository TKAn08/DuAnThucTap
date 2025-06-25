import './App.scss';
import Header from './components/header';
import TableUsers from './components/TableUsers';
import { Container } from 'react-bootstrap';
import ModalAddNew from './components/ModalAddNew';
import { useState } from 'react';
function App() {

  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const handleClose = () => {
    setIsShowAddNew(false);
  }
  return (
    <div className='app-container'>
      <Header />;
      <Container>
        <div className='my-3 add-new'>
          <span> <b>List Users:</b> </span>
          <button className='btn btn-success' onClick={() => setIsShowAddNew(true)}>Thêm mới</button>
        </div>
        <TableUsers />
        <ModalAddNew
          show={isShowAddNew}
          handleClose={handleClose}>
        </ModalAddNew>
      </Container>


    </div>
  );
}

export default App;
