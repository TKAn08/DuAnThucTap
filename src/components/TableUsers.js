import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { fetchAllUser } from '../services/UserService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';
import ModalEditUser from './ModalEditUser';

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowAddNew, setIsShowAddNew] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [dataEdit, setDataEdit] = useState({});
    const handleClose = () => {
        setIsShowAddNew(false);
        setIsShowEdit(false);
    }
    useEffect(() => {
        getUser(1);
    }, []);

    const handleUpdateTable = user => {
        setListUsers([user, ...listUsers]);
    }

    const handleEditUser = user => {
        setIsShowEdit(true);
        setDataEdit(user);
    }

    const getUser = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setListUsers(res.data)
            setTotalUsers(res.total);
            setTotalPages(res.total_pages);
        }
    }

    const handlePageClick = (event) => {
        getUser(+event.selected + 1);
    }
    return (
        <>
            <div className='my-3 add-new'>
                <span> <b>List Users:</b> </span>
                <button className='btn btn-success' onClick={() => setIsShowAddNew(true)}>Thêm mới</button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((user, index) => {
                            return (
                                <tr key={`users-${index}`}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>
                                        <button class="btn btn-primary mx-3" onClick={() => handleEditUser(user)}>Edit</button>
                                        <button class="btn btn-warning">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table >
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}

                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName='pagination'
                activeClassName='active'
            />
            <ModalAddNew
                show={isShowAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />

            <ModalEditUser
                show={isShowEdit}
                handleClose={handleClose}
                dataEdit={dataEdit}
            />
        </>);
}
export default TableUsers;