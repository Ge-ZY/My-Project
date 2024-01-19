import React from 'react'
import Const from '../utils/Const'
import axios from 'axios'
import Request from '../utils/Request'



/**水位数据展示 */
export const getWaterLevelData = () => {
    return Request.Get('/business/wszz/waterMonitor')
}
// export { getWaterLevelData }
