// Generated by BUCKLESCRIPT VERSION 2.2.3, PLEASE EDIT WITH CARE
'use strict';


var prompt = "/Users/akin_sowemimo/root";

var about = /* array */[
  "I trained as a Medical Doctor at King's college london.",
  "Unfortunately after 8 years of studying, training, many an up and down\n      I realised that it wasn\'t for me and parted ways with that time of my life.\n        ",
  " As understandeably unusual a choice as it might seem I much preferred tinkering with computers\n      I\'d spent much of my youth messing around with hardware but it wasn\'t really till the fateful summer having just\n      decided to leave my job that I discovered github and the rest is history...\n      ",
  "Actually the rest is me meeting a bunch of other aspiring developers, our forming a group to teach each other\n      then my finding out about founders and coders in London"
];

function showPrompt() {
  return "/Users/akin_sowemimo/root:";
}

var files = /* record */[/* about */about];

function ls() {
  return files;
}

var errorsMessages = /* record */[
  /* invalid_dir */"Sorry the directory is invalid",
  /* invalid_cmd */"Sorry that command is invalid",
  /* invalid_file */"Sorry that file is invalid"
];

exports.errorsMessages = errorsMessages;
exports.prompt = prompt;
exports.about = about;
exports.showPrompt = showPrompt;
exports.files = files;
exports.ls = ls;
/* No side effect */
