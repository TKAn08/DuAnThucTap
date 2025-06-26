// import instance from './customize-axios';
import axios from 'axios';
import instance from './customize-axios';
const fetchAllUser = (page_number) => {
    return instance.get(`/api/users?page=${page_number}`);
}
const postCreateUser = (name, job) => {
    return instance.post("/api/users", { name, job })

}
export { fetchAllUser, postCreateUser };