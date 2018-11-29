import React from "react"
import Link from 'umi/link';
import {Layout, Menu, Icon} from 'antd'

const {Header, Footer, Sider, Content} = Layout
const SubMenu = Menu.SubMenu;

class IndexLayout extends React.PureComponent {
    render() {
        return (
            <Layout>
                <Sider>
                    <div style={{height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu defaultSelectedKeys={['1']} mode='inline' theme="dark">
                        <Menu.Item>
                            <Icon type='home'/>
                            <span>标签页</span>
                        </Menu.Item>
                        <SubMenu key='sub1' title={<span><Icon type='dashboard'/><span>标签</span></span>}>
                            <Menu.Item key='2'><Link to='/comment/commentApp'>评论</Link></Menu.Item>
                            <Menu.Item key='3'><Link to={'/title/list'}/>标签页2</Menu.Item>
                            <SubMenu key='sub2' title='小标签'>
                                <Menu.Item key='4'><Link to={'/users/list'}/>小标签1</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu type='dashboard' title='标签'>
                            <Menu.Item>标签页2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', textAlign: 'center', padding: 0}}>header</Header>
                    <Content>{this.props.children}</Content>
                    <Footer style={{textAlign: 'center', padding: 0}}>footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default IndexLayout;