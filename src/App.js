import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from 'antd/es/button';
import {Button, Layout,} from 'antd';
import One from './One.js'

const {Header, Footer, Sider, Content} = Layout;

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
            button: '这是一个按钮',
            boys: '我爱王俊凯',
            count: 0,
            geione: '给one',
            fruits:[{
              id:1,name:'苹果',ename:'apple'
            },{
              id:2,name:'香蕉',ename: 'banana'
            },{
              id:3,name:'橘子',ename:'orange'
            }],
            childList:[],
            bgColor:'#f00'
        }
    }

    render() {
        let {button, boys, count,geione,fruits,childList,bgColor} = this.state
        return (
            <div className="App" style={{background:bgColor}}>
                <span>{count}</span>
                <Button type="primary" onClick={this.handleClick.bind(this)}>{button}</Button>
                <p className="first-class">{boys}</p>

                <Layout>
                    <Header>header</Header>
                    <Layout>
                        <Sider>left sidebar</Sider>
                        <Content>main content</Content>
                        <Sider>right sidebar</Sider>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
              <One getfruits={fruits} sendApp={this.getChildData.bind(this)}/>
              得到子组件传来的值为：
              <div>
                {
                  childList.map(item=>{
                    return(
                        <p key={item.id}><span>{item.id}</span><span>{item.first}</span></p>
                    )
                  })
                }
              </div>
            </div>
        );
    }
    handleClick() {
        console.log('点击了一个按钮')
        // this.setState({
        //     count: this.state.count+2
        // })
      // this.setState((state)=>({
      //   count:state.count+3
      // }))
    }
  countAdd(){
      this.setState({
        count:this.state.count++
      })
  }
    componentDidMount() {
      setInterval(()=>{
        this.countAdd.bind(this)
      },1000)
    }
  getChildData(val){
      console.log(val)
    this.setState({
      bgColor:val
    })
  }
}



export default App;
