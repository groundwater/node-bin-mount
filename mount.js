#!/usr/bin/env node

var mount = require('src-mount');
var errno = require('src-errno');

var dev  = process.argv[2];
var path = process.argv[3];
var type = "ext4";
var flag = mount.flags.MS_REMOUNT;

var res = mount.mount(dev,path,type,flag,"errors=remount-ro");

console.log(res);
