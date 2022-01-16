/** @type {import('@docusaurus/types').PresetConfig[]} */
module.exports = [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve(process.cwd()+'/config/sidebar/index.js'),
        // Please change this to your repo.
        editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        editUrl:
          'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: require.resolve(process.cwd()+'/src/css/custom.css'),
      },
    }),
  ],
]