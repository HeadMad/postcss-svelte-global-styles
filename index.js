const postcss = require('postcss')
const isGlobal = /:global\((.+?)\)/

module.exports = postcss.plugin('postcss-svelte-global-styles', () => {
  return root => {
    root.walkRules((rule) => {
      const globalSelectors = postcss.list
        .comma(rule.selector)
        .map((sel) => !isGlobal.test(sel)
          ? ':global(' + sel + ')'
          : sel)
      rule.selector = globalSelectors.join(',')
    })

    root.walkAtRules('keyframes', (atrule) => {
      if (postcss.vendor.prefix(atrule.params) !== '-global-')
        atrule.params = '-global-' + atrule.params
      atrule.walkRules(isGlobal, (rule) => {
        rule.selector = rule.selector.replace(isGlobal, '$1')
      })
    })
  }
})