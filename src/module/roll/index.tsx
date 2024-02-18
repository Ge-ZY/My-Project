import * as React from 'react';
interface Props {
    dom: any,
    margin?: number,
    time?: number,
}
interface State {
    isRoll: boolean
}
export default class Roll extends React.Component<Props, State>  {
    constructor(props: any) {
        super(props);
        this.state = {
            isRoll: false
        }
    }
    componentDidMount() {
        this.roll();
    }
    componentWillUnmount() {
        clearInterval(this.time);
    }
    componentDidUpdate(preProps: any, preState: any) {
        if (preProps !== this.props) {
            if (this.debounceTime) {
                clearTimeout(this.debounceTime)
            }
            this.debounceTime = setTimeout(() => {
                this.roll()
            }, 1000)
        }
    }
    private scrollTop = 0
    private debounceTime: any;

    roll = () => {
        if (this.div) {
            if (this.time) {
                this.stopRoll()
            }
            this.setState({
                isRoll: false
            }, () => {
                this.heightSum = 0
                for (let i = 0; i < this.div.children.length; i++) {
                    this.heightSum += (this.div.children[i].clientHeight + (this.props.margin ? this.props.margin : 0))
                };
                if (this.div.clientHeight < this.heightSum) {
                    this.setState({
                        isRoll: true
                    }, () => {
                        this.div.removeEventListener('scroll', this.handler)
                        this.div.addEventListener('scroll', this.handler)
                        this.time = setInterval(() => {
                            this.scrollTop++;
                            this.div.scrollTop = this.scrollTop
                        }, this.props.time === undefined ? 40 : this.props.time)
                    })
                }
            })
        }
    }
    stopRoll = () => {
        clearInterval(this.time);
    }
    handler = () => {
        if (this.div) {
            if (this.div && this.div.scrollTop >= (this.heightSum)) {
                this.scrollTop = 0
                this.div.scrollTop = this.scrollTop
            } else {
                this.scrollTop = this.div.scrollTop
            }
        }
    }


    private heightSum: number = 0;
    private div: any;
    private time: any;

    public render() {
        return (
            <React.Fragment>
                <div className="roll_Box" ref={(ref) => { this.div = ref }} onMouseEnter={this.stopRoll} onMouseLeave={this.roll}>
                    {this.props.dom}
                    {this.state.isRoll ? this.props.dom : null}
                </div>
            </React.Fragment>
        )
    }
}
