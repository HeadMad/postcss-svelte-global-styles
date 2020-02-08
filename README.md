# PLUGIN_TITLE

[PostCSS] plugin postcss-svelte-global-styles.

[PostCSS]: https://github.com/HeadMad/postcss-svelte-global-styles

```css
.foo {
    /* Input example */
}
```

```css
:global(.foo) {
  /* Output example */
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-svelte-global-styles'),
    require('autoprefixer')
  ]
}
```
