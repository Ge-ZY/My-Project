import React, { Component } from 'react'
import routes from '../../routes'
import './index.scss'
import { NavLink, createBrowserRouter } from 'react-router-dom'

interface State {
    buttontext: any
}
interface Props {
    pageClick: any, //点击事件
}
export default class SwitchSelect extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            buttontext: [
                { name: '第一页', key: 'firstPage' },
                { name: '第二页', key: 'secondPage' },
            ]
        }

    }

    componentDidMount(): void {
    }
    onClicks = (name: any) => {
        this.props.pageClick(name)
    }
    render() {
        const { pageClick } = this.props
        const { buttontext } = this.state
        return (
            <div className='switch_select'>
                {/* {buttontext.map((item: any, index: number) => {
                    return <div className='switch_select_item' key={item.key} onClick={() => this.onClicks(item.key)}>{item.name}</div>
                })} */}
                <NavLink className="switch_select_item" to="/firstPage">第一页</NavLink>
                <NavLink className="switch_select_item" to="/secondPage">第二页</NavLink>
            </div>
        )
    }
}
