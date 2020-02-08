const postcss = require('postcss')
const plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

/* Write tests here

it('does something', async () => {
  await run('a{ }', 'a{ }', { })
})

*/

it('make one selector globaly', async () => {
  await run('a{ }', ':global(a){ }', { })
})

it('make a nested selector globaly', async () => {
  await run('div a{ }', ':global(div a){ }', { })
})

it('make several selectors globaly', async () => {
  await run('div, a{ }', ':global(div),:global(a){ }', { })
})

it('make global selector globaly', async () => {
  await run(':global(div){ }', ':global(div){ }', { })
})
