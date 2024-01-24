import React, { Component } from 'react'
import './index.scss'

interface Props {
    position?: any
    margin_top?: any

}
interface State {
    read: any
    color: any
}
export default class Card extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            color: 'red',
            read: 'ss'
        }
    }
    componentDidMount(): void {
    }
    render() {
        const { position, margin_top } = this.props
        return (
            <div className={`module_card ${position ? position : 'left'}`} style={{ marginTop: `${margin_top ? margin_top : '0'}` }}>
                {position}
            </div>
        )
    }
}
