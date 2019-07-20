import axios from 'axios'

const LoginAxios = {
    login: _ => axios.get('/login'),
    verify: _ => axios.get('/verify')
}
export default LoginAxios