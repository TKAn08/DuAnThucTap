import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"
import { postCreateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalEditUser = (props) => {
    const { show, handleClose, dataEdit } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handleEditUser = () => {

    }
    useEffect(() => {
        if (show) {
            setName(dataEdit.first_name)
        }
    }, [dataEdit])
    console.log(dataEdit);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text"
                                className="form-control"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Job</label>
                            <input type="text"
                                className="form-control"
                                value={job}
                                onChange={(event) => setJob(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEditUser;