# tingle-avatar [![npm version](https://badge.fury.io/js/tingle-avatar.svg)](http://badge.fury.io/js/tingle-avatar)

## TL;DR
  根据名字随机生成一个带背景颜色的头像，可给人员或公司默认 logo 等场景使用。
  生成规则如下：
  1. 定义一组颜色集合
  2. 通过名字来计算 hashCode ，hashCode 算法采用 java 中的 hashCode 实现方式， __如果和客户端同时开发项目，请注意和 ios/android 同学沟通保持一致的 hash算法__（可以通过 Avatar.hashCode('xxx'); Avatar.hashCode('xxx', true); 来测试 hash 值）。计算结果默认为 int 型（可能会为负数），也可通过传入 isLong: true 得到 long 型（过长会用科学计数法表示）。
  3. 将 hashCode 取绝对值，对颜色集合的总数进行取模，得到颜色的索引，即得到了背景颜色
  4. 名字显示规则
   * 如果是第一个字符是英文，则取第一个字符，转为大写；
   * 如果小于等于两个字符，全部显示
   * 如果等于三个字符，显示后两个字符
   * 如果大于三个字符，显示前两个字符
   * 如果没有名字，显示一个默认图片

<img src="https://img.alicdn.com/tps/TB1TmsFKpXXXXcbXpXXXXXXXXXX-866-1480.png" width="375"/>

## Simple Usage
```javascript
const Avatar = require('../src');
class Demo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="avatar-demo">
                <Avatar name="tingle"/>
                <Avatar name="天晟"/>
                <Avatar name="马天明"/>
                <Avatar name="欧阳夏丹"/>
                <Avatar defaultAvatar="https://img.alicdn.com/tps/TB1amOaKpXXXXbsXVXXXXXXXXXX-144-144.png"/>
                <Avatar />
            </div>
        );
    }
};

module.exports = Demo;
```

## Props

#### name

描述：名字

类型：String

默认：''

必填：否

#### size

描述：头像大小

类型：String / Number

默认：40px

必填：否

#### fontSize

描述：字体大小

类型：String / Number

默认：12px

必填：否

#### colors

描述：用来生成背景的颜色集合，可通过 Context.setGloabl({avatarColors: ['red', 'blue']}) 统一进行设置， 也可以通过 props 传入

类型：Array

默认：["#68ba99", "#66b09c", "#55a4ae", "#5c9bbb", "#529e92", "#55b595"] 

必填：否

#### color

描述：名字颜色

类型：String

默认：#fff

必填：否

#### className

描述：自定义 class

类型：String

默认：''

必填：否

#### hashCode

描述：hashCode 算法

类型：Function

默认：java 默认的 hashCode 算法

必填：否

#### isLong

描述：hashCode 的类型

类型：Boolean

默认：false

必填：否

#### defaultColor

描述：固定背景颜色，若传入此参数，则背景颜色为当前参数颜色

类型：String

默认：''

必填：否

#### defaultAvatar

描述：没有名字是显示的默认头像地址

类型：String

默认：https://img.alicdn.com/tps/TB1.IgIKpXXXXbgXpXXXXXXXXXX-116-116.png

必填：否



## API接口

### Avatar.hashCode(name, isLong)

静态方法，计算名字的 hashCode，__如果和客户端同时开发项目，可通过此方法测试 hashCode是否和 ios/android 同学保持一致__

### Avatar.formatName(name)

静态方法，按照名字显示规则返回名字


## Links 相关链接

- [Issues](http://github.com/tinglejs/tingle-avatar/issues)

