/**
 * Avatar Component Demo for tingle
 * @author alex.mm
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');
const Context = require('tingle-context');
const Avatar = require('../src');
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="avatar-demo">
                <h2>自定义大小</h2>
                <Avatar name="tingle" size={60} />
                <Avatar name="天晟" size={80} fontSize={16} />
                <Avatar name="马天明" size={100} fontSize={20} />
            </div>
        );
    }
};

module.exports = Demo;
