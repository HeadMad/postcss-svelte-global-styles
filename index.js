const postcss = require('postcss')
const isGlobal = /:global\(\s*\S+\s*\)/

module.exports = postcss.plugin('postcss-svelte-global-styles', () => {
  return root => {
    root.walkRules(rule => {
      let selectors = rule.selector.split(',')
      let globalSelectors = selectors.map(sel => {
        // change selector
        return isGlobal.test(sel) ? sel : ':global(' + sel.trim() + ')'
      })
      rule.selector = globalSelectors.join(',')
    })
  }
})
