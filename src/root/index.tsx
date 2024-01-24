import React, { Component } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import FirstPage from '../pages/FirstPage';
import { transform } from 'typescript';
import './index.scss'
import MainIndex from './mainIndex';
import SwitchSelect from './bottom';

interface State {
    widthRatio: any
    heightRatio: any
    switchPage: any
}
interface Props {

}
export default class Root extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            widthRatio: window.innerWidth / 1920,
            heightRatio: window.innerHeight / 1080,
            switchPage: 'firstPage'
        };
    }
    static contextType = ThemeContext;
    componentDidMount(): void {
        window.addEventListener('resize', this.handleResize);
    }
    //窗口自适应
    handleResize = () => {
        console.log('resize')
        let width = window.innerWidth;
        let height = window.innerHeight;
        let widthRatio = width / 1920;
        let heightRatio = height / 1080;
        this.setState({ widthRatio: widthRatio, heightRatio: heightRatio })
    }
    //页面切换
    pageSwitch = (params: any) => {
        this.setState({ switchPage: params })
    }
    render() {
        const context: any = this.context;
        const { widthRatio, heightRatio, switchPage } = this.state;
        return (
            <div className='root' style={{ transform: `scale(${widthRatio},${heightRatio})`, transformOrigin: '0% 0%' }}>
                {MainIndex.initModuleClass(switchPage, this)}
                <SwitchSelect pageClick={this.pageSwitch}></SwitchSelect>
            </div>
        )
    }
}
