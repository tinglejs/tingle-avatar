/**
 * Avatar Component Demo for tingle
 * @author alex.mm
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const Avatar = require('../src');
class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="hash-code">
                    <h2>hashCode 测试：</h2>
                    <dl>
                        <dt>天晟</dt>
                        <dd>hashCode: {Avatar.hashCode('天晟')}</dd>
                    </dl>
                    <dl>
                        <dt>阿里巴巴集团</dt>
                        <dd>hashCode: {Avatar.hashCode('阿里巴巴集团')}</dd>
                    </dl>
                    <dl>
                        <dt>阿里巴巴集团</dt>
                        <dd>hashCode(long): {Avatar.hashCode('阿里巴巴集团', true)}</dd>
                    </dl>
                     <dl>
                        <dt>alex</dt>
                        <dd>hashCode: {Avatar.hashCode('alex')}</dd>
                    </dl>
                </div>
                <div className="avatar-demo">
                    <h2>Demo</h2>
                    <Avatar name="tingle"/>
                    <Avatar name="天晟"/>
                    <Avatar name="马天明"/>
                    <Avatar name="欧阳夏丹"/>
                    <Avatar />
                    <Avatar src="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>
                </div>
            </div>
        );
    }
};

module.exports = Demo;
