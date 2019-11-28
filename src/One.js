import React from 'react'
import {Button} from 'antd'

class One extends React.Component{
    constructor(props){
        // console.log(props)
        super(props)
        this.state = {
            toapp:'给APP',
            listArr:[{
                id:1,first:'第一',
            },{
                id:2,first:'第二'
            },{
                id:3,first:'第三'
            }],
            changeColor:'#ff0'
        }
    }
    render() {
        let {toapp} = this.state
        return(
            <div>
                这是one
                接受到app的
                <div>
                    {
                        this.props.getfruits.map(item=>{
                            // console.log(item)
                            return(
                                <p key={item.id}><span>{item.name}</span><span className='ename'>{item.ename}</span>{item.name}</p>
                            )
                        })
                    }
                </div>
                <Button type='primary' onClick={this.sendToApp.bind(this)}>发送给父组件</Button>
            </div>
        )
    }
    // 子组件发展送给父组件app
    // componentDidMount() {
    //     this.props.sendApp(this.state.listArr)
    // }
    //点击按钮时才发送给父组件
    sendToApp(){
        this.props.sendApp(this.state.changeColor)
    }
}

export default One;