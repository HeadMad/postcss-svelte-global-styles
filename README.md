# Make Svelte Styles Global Again!

[PostCSS](https://github.com/postcss/postcss) plugin postcss-svelte-global-styles.

## Install
```
npm install --save-dev HeadMad/postcss-svelte-global-styles#1.0
```

## Exemple
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
