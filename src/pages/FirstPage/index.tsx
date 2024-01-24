import React, { useEffect, useState } from 'react'
import * as Api from '../../api';
import Const from '../../utils/Const';
import Card from '../../module/Card';
import './index.scss'

export default function FirstPage() {
    useEffect(() => {
    })
    const [position, setPosition] = useState('left');
    const waterData = () => {
        Api.getWaterLevelData().then((res) => {

        })
    }
    const buttonClick = () => {
        setPosition(position === 'left' ? 'right' : 'left');
        console.log(position)
    }
    return (
        <div className='first_page'>
            <div className="left_style">
                <Card position='left'></Card>
                <Card position='left' margin_top={'20px'}></Card>
                <Card position='left' margin_top={'20px'}></Card>
            </div>
            <div className='right_style'>
                <Card position='right'></Card>
                <Card position='right' margin_top={'20px'}></Card>
                <Card position='right' margin_top={'20px'}></Card>
            </div>
        </div>

    )
}
