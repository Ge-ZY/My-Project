import React, { Component } from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import FirstPage from '../pages/FirstPage';

export default class Root extends Component {
    constructor(props: any) {
        super(props);
    }
    static contextType = ThemeContext;
    componentDidMount(): void {
        console.log(this.context)
        console.log(this)
    }

    render() {
        const context: any = this.context;
        return (
            <div>
                <FirstPage />
            </div>
        )
    }
}
