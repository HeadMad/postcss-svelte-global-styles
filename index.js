const postcss = require('postcss')
const isGlobal = /:global\(\s*\S+\s*\)/

module.exports = postcss.plugin('postcss-svelte-global-styles', () => {
  return root => {
    root.walkRules(rule => {
      const globalSelectors = postcss.list
        .comma(rule.selector)
        .map(sel => !isGlobal.test(sel)
          ? ':global(' + sel.trim() + ')'
          : sel)
      rule.selector = globalSelectors.join(',')
    })
  }
})