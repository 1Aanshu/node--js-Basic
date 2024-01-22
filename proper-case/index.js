const puc = require("proper-upper-case");

const convertString = (string) => {
  return puc(string);
};

const result = convertString("My name is aanshu DWIWEDI");

console.log(result);

// npm -v
// npm library( npmjs.com)
//library => proper-upper-case
// we will get node_modules, package.json, package-lock.json
// import the package in the code (require)
// use the package and done !!

// Write a js function to convert title to slug
// Eg: "React Js Clean Code Guide " => react-js-clean-code-guide

const slugCase = (string) => {
  return string.toLowerCase().replaceAll(" ", "-");
};

const res = slugCase("React Js Clean Code Guide");

console.log({ res });
// use npm package to find the slug converter

const slugger = require("slugify");

const slugur = (string) => {
  return slugger(string, { lower: true });
};

const result1 = slugur("React Js Clean Code Guide");

console.log(result1);

// bcrypt.js

// use the above package to convert the string to hash */*
