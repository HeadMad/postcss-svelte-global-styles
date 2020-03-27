# Make Svelte Styles Global Again!

[PostCSS] plugin postcss-svelte-global-styles.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Before */
.foo {
  width: 300px;
}

.bar,
.baz {
  height: 300px;
}
```

```css
/* After */
:global(.foo) {
  width: 300px;
}

:global(.bar),
:global(.baz) {
  height: 300px;
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
