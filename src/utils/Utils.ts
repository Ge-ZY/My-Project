export default class Utils {
    /**获取serverIp */
    static getServerIp() {
        let params: any = window.sessionStorage.getItem('configIp')
        return JSON.parse(params).serverIp;
    }
}