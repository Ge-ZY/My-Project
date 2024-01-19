import React, { useEffect } from 'react'
import * as Api from '../../api';
import Const from '../../utils/Const';

export default function FirstPage() {
    useEffect(() => {
        console.log(Const.serverIp)
        waterData()
    })
    const waterData = () => {
        Api.getWaterLevelData().then((res) => {
            console.log(res)
        })
    }
    return (
        <div>
            1111
        </div>
    )
}
