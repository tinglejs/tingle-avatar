/**
 * Avatar Component for tingle
 * @author alex.mm
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const {unitize} = require('tingle-style');
const Context = require('tingle-context');
const avatarColors = ["#68ba99", "#66b09c", "#55a4ae", "#5c9bbb", "#529e92", "#55b595"];
const defaultSrc = 'https://img.alicdn.com/tps/TB1.IgIKpXXXXbgXpXXXXXXXXXX-116-116.png';
Context.setGlobal({avatar: {}});
let global = Context.getGlobal('avatar');

class Avatar extends React.Component {

    constructor(props) {
        super(props);
        let size = unitize(this.props.size);
        this.style = {
            "width": size,
            "height": size,
            "lineHeight": size,
            "fontSize": unitize(this.props.fontSize)
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        for (let key in this.props) {
            if (this.props[key] !== nextProps[key]) {
                return true;
            }
        }
        return false;
    }

    render() {
        let t = this;
        if (!t.props.name || t.props.src) {
            return (
                <img ref='root' className={classnames('tAvatar', {
                    [t.props.className]: !!t.props.className
                })} src={t.props.src || t.props.defaultSrc} style={t.style}/>
            );
        }
        if (t.props.defaultColor) {
            t.style.backgroundColor = t.props.defaultColor;
        } else {
            let hashCode = t.props.hashCode(t.props.name, t.props.isLong);
            t.style.backgroundColor = t.props.colors[Math.abs(hashCode) % t.props.colors.length];
        }
        return (
            <label ref='root' className={classnames('tAvatar', {
                [t.props.className]: !!t.props.className
            })} style={this.style}>
                {Avatar.formatName(t.props.name)}
            </label>
        );
    }
}

Avatar.hashCode = (strKey, isLong) => {
    let intValue = (num) => {
        let MAX_VALUE = 0x7fffffff;
        let MIN_VALUE = -0x80000000;
        if (num > MAX_VALUE || num < MIN_VALUE) {
            return num &= 0xFFFFFFFF;
        }
        return num;
    };

    let hash = 0;
    if (typeof strKey === 'string') {
        for (let i = 0, l = strKey.length; i < l; i++) {
            hash = hash * 31 + strKey.charCodeAt(i);
            if (!isLong) {
                hash = intValue(hash);
            }
        }
    }
    return hash;
};

Avatar.formatName = (name) => {
    let firstChar = name.slice(0, 1);
    if (/^[A-Za-z]+$/.test(firstChar)) {
        return firstChar.toUpperCase();
    }
    if (name.length === 3) {
        return name.slice(1, 3);
    }
    if (name.length > 3) {
        return name.slice(0, 2);
    }
    return name;
};

Avatar.defaultProps = {
    className: '',
    name: '',
    src: '',
    defaultColor: '',
    colors: global.colors || avatarColors,
    defaultSrc: global.defaultSrc || defaultSrc,
    hashCode: global.hashCode || Avatar.hashCode,
    isLong: false,
    size: 40,
    fontSize: 12
};

// http://facebook.github.io/react/docs/reusable-components.html
Avatar.propTypes = {
    className: React.PropTypes.string,
    size: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    fontSize: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    name: React.PropTypes.string,
    defaultColor: React.PropTypes.string,
    defaultSrc: React.PropTypes.string,
    src: React.PropTypes.string,
    colors: React.PropTypes.array,
    isLong: React.PropTypes.bool,
    hashCode: React.PropTypes.func
};

Avatar.displayName = 'Avatar';

module.exports = Avatar;
