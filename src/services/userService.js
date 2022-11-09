import { api } from '../constants/api'
const userService = {
    login: (values) => {
        return api.post('Users/signin', values);
    },
    register: (values) => {
        return api.post("Users/signup", {
            ...values
        });
    }
}
export default userService;