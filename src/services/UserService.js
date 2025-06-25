// import instance from './customize-axios';
import instance from './customize-axios';
const fetchAllUser = (page_number) => {
    return instance.get(`/api/users?page=${page_number}`);
}

export { fetchAllUser };