import React, { useContext, useEffect, useState } from 'react'
import * as Api from '../../api';
import Const from '../../utils/Const';
import Card from '../../module/Card';
import './index.scss'
import { ThemeContext } from '../../utils/ThemeContext';

export default function FirstPage(parent?: any) {
    useEffect(() => {
        console.log(parent)
        console.log(theme)
        arryTest()
    })
    const theme = useContext(ThemeContext);
    const [position, setPosition] = useState('left');
    const waterData = () => {
        Api.getWaterLevelData().then((res) => {

        })
    }
    const buttonClick = () => {
        setPosition(position === 'left' ? 'right' : 'left');
    }
    const arryTest = () => {
        let nums = [1, 3, -1, -3, 5, 3, 6, 7]
        let k = 3
        let array = []
        if (k >= nums.length) {
            return array.push(Math.max(...nums))
        } else {
            for (let i = 0; i < nums.length - k + 1; i++) {
                let max = nums[i];
                for (let j = i + 1; j < i + k; j++) {
                    if (max < nums[j]) {
                        max = nums[j]
                    }
                }
                console.log(max)
                console.log(i)
                array.push(max)
            }
            console.log(array)
            return array
        }

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
