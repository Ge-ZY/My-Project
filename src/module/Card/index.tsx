import React, { Component } from 'react'
import './index.scss'

interface Props {
    position?: any

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
        console.log(this.props.position)
    }
    render() {
        const { position } = this.props
        return (
            <div className={`module_card ${position ? position : 'left'}`}>
                {position}
            </div>
        )
    }
}
