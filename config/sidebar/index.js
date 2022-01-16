/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const fs = require('fs');
const path = require('path');

const filterDir = (path, list) => {
  return list.filter((item) => {
    return fs.lstatSync(path + "/" + item).isDirectory();
  });
};
const sidebarCategorItemsGenerato = (sidebarPath, indexOfList) => {
  const childPath = path.resolve(process.cwd(), sidebarPath);
  const itemList = fs.readdirSync(childPath);
  const itemListFilter = filterDir(childPath, itemList);
  let items = [];
  if (itemListFilter.length) {
    items = itemListFilter.map((value, index) => {
      const indexOfItem = indexOfList.find(v => v.dirName === value);
      const item = {
        type: 'link',
        label: indexOfItem?.label || value,
        href: '/docs/category/' + value.toLowerCase(),
      }
      return item;
    });
  } else {
    items = indexOfList;
  }
  return items.sort((a, b) => a.label.length - b.label.length);
}

const sidebarItemsGenerato = () => {
  const sidebars = {};
  const sidebarPath = './config/sidebar/modules/';
  const recursion = (sidebars, sidebarPath, parentPath) => {
    const dirPath = path.resolve(process.cwd(), sidebarPath);
    const dirList = fs.readdirSync(dirPath)
    const dirListFilter = filterDir(dirPath, dirList);
    dirListFilter.forEach((value, index) => {
      sidebars[value] = [];
      if (parentPath) {
        sidebars[value].push({
          type: 'link',
          label: '返回',
          href: '/docs/category/' + parentPath,
        });
      }
      const childPath = sidebarPath + '/' + value + '/';
      const dirOfIndexPath = path.resolve(process.cwd(), childPath + '/index.js');
      const isExistDirOfIndex = fs.existsSync(dirOfIndexPath);
      let dirOfIndex = [];
      if (isExistDirOfIndex) {
        dirOfIndex = require(dirOfIndexPath);
      }
      const sidebarItem = {
        type: 'category',
        label: value,
        link: {
          type: 'generated-index',
        },
        collapsed: false,
        items: sidebarCategorItemsGenerato(childPath, dirOfIndex)
      }
      sidebars[value].push(sidebarItem);
      recursion(sidebars, childPath, value);
    });
  }
  recursion(sidebars, sidebarPath, '');
  return sidebars;
}

const sidebars = {
  ...sidebarItemsGenerato()
}
module.exports = sidebars;
