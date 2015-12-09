/**
 * Avatar Component Demo for tingle
 * @author alex.mm
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const Avatar = require('../src');
const avatarColors = ['green', 'grey', 'orange', 'blue', 'red'];

// avatarColors 可以通过 Context 来全局设置，这里由于avatar.js 在AvatarDemo.js 中已经加载了，所以使用 props 来设置。
//const Context = require('tingle-context');
//let global = Context.getGlobal('avatar');
//global.colors = avatarColors;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="avatar-demo">
                <h2>自定义颜色集合</h2>
                <Avatar name="tingle" colors={avatarColors}/>
                <Avatar name="天晟" colors={avatarColors}/>
                <Avatar name="马天明" colors={avatarColors}/>
                <Avatar name="欧阳夏丹" colors={avatarColors}/>
                <Avatar name="马明" defaultColor={'#333'}/>
            </div>
        );
    }
};

module.exports = Demo;
