import * as React from 'react';
import Link from 'umi/link';
import {Table, Divider, Tag, Pagination} from 'antd';
import {Card} from 'antd';

const columns = [
    {title: '英雄', dataIndex: 'userName'},
    {title: '简称', dataIndex: 'NikeName'},
    {title: '职业', dataIndex: 'vocation'},
    {title: '阵营', dataIndex: 'camp'}
]

const users = [
    {key: "1", userName: '德玛西亚之力', NikeName: '德玛', vocation: '战士', camp: '德玛西亚'},
    {key: "2", userName: '九尾妖狐', NikeName: '阿狸', vocation: '法师', camp: '艾欧尼亚'},
    {key: "3", userName: '时间刺客', NikeName: '艾克', vocation: '刺客', camp: '祖安'},
    {key: "4", userName: '沙漠死神', NikeName: '内瑟斯', vocation: '坦克', camp: '恕瑞玛'},
    {key: "5", userName: '虚空之女', NikeName: '卡莎', vocation: '射手', camp: '虚空之地'},
    {key: "6", userName: '唤潮鲛姬', NikeName: '娜美', vocation: '辅助', camp: '符文之地'},
]

class User extends React.PureComponent {
    render() {
        const {user} = this.props;
        return (
            <div>
                <div>英雄：{user.userName}---{user.NikeName}</div>
                <div>职业：{user.vocation}</div>
                <div>阵营：{user.camp}</div>
                <hr/>
            </div>
        );
    }
}

class Index extends React.PureComponent {
    render() {
        return (
            <div>
                {/*{users.map((user, i) => <User key={i} user={user}/>)}*/}
                <Link to='/title/list'>title</Link>
                <Table dataSource={users} columns={columns}/>
            </div>
        )
    }

}

export default Index;
