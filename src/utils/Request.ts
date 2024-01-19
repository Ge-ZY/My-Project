import axios from 'axios'
import Const from './Const'
let inner = axios.create({})
inner.defaults.baseURL = Const.serverIp
export default class Request {
    public static async Get(url: string, params?: any) {
        return new Promise((resolve, reject) => {
            inner.get(url, { params }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}