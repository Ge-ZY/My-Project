import React, { Component, createRef } from 'react'
import { ThemeContext } from '../../utils/ThemeContext';

export default class SecondPage extends Component {
    constructor(props: any) {
        super(props)
        this.state = {}
    }

    static contextType = ThemeContext;
    context: any
    componentDidMount(): void {
        console.log(this.context)
        console.log(this)
        console.log(this.myRef.current)
    }
    private myRef: any = createRef()
    render() {
        return (
            <div className='Second_Page' ref={this.myRef}>
                {this.context}
            </div>
        )
    }
}


