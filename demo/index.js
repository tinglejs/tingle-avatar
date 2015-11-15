/**
 * Avatar Component Demo for tingle
 * @author alex.mm
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./AvatarDemo');
var CustomColors = require('./customColors');
var CustomSize = require('./customSize');
React.render(<Demo/>, document.getElementById('TingleDemo'));
React.render(<CustomColors/>, document.getElementById('customColors'));
React.render(<CustomSize/>, document.getElementById('customSize'));
