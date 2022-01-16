module.exports = {
  title: '柏拉文',
  logo: {
    alt: '柏拉文博客',
    src: 'img/logo.png',
  },
  items: [
    {
      label:'知识',
      position:'left',
      to:'/docs/category/knowledge'
    },
    {
      label:'技术',
      position:'left',
      to:'/docs/category/technology'
    },
    { to: '/blog', label: '文章', position: 'left' },
    { to: 'showcase', label: '案例展示', position: 'left' },
    {
      type: 'search',
      position: 'right',
    },
    {
      type: 'docsVersionDropdown',
      position: 'right',
      dropdownActiveClassDisabled: true,
      dropdownItemsAfter: [
        {
          href: 'https://v1.docusaurus.io',
          label: '1.x.x',
        },
        {
          to: '/versions',
          label: 'All versions',
        },
      ],
    },
    {
      type: 'localeDropdown',
      position: 'right',
      dropdownItemsAfter: [
        {
          href: 'https://github.com/facebook/docusaurus/issues/3526',
          label: 'Help Us Translate',
        },
      ],
    },
    {
      href: 'https://github.com/bolawen',
      position: 'right',
      className: 'header-github-link',
      'aria-label': 'GitHub repository',
    },
  ],
}