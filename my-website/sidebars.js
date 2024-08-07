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
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  jnbSidebar: [{type: 'autogenerated', dirName: 'jnb'}],
  ecotrixSidebar: [{type: 'autogenerated', dirName: 'ecotrix'}],
  empiricalio: [{type: 'autogenerated', dirName: 'eio'}],
  fqcmdSidebar: [{type: 'autogenerated', dirName: 'fqcmd'}],
  mlSidebar: [{type: 'autogenerated', dirName: 'ml'}],
  testSidebar: [{type: 'autogenerated', dirName: 'test'}],
  math_statSidebar:[{type: 'autogenerated', dirName: 'math_stat'}],
  linearalgebraSidebar:[{type: 'autogenerated', dirName: 'linearalgebra'}]
  // But you can create a sidebar manually
  
  /*tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],*/
   
};

export default sidebars;
