// Support for 3.0 - 3.2
const { registerMacros } = Ember.__loader.require('ember-glimmer');

function blockLetMacro(params, _hash, template, _inverse, builder) {
  if (template !== null) {
    if (params !== null) {
      builder.compileParams(params);
      builder.invokeStaticBlock(template, params.length);
    } else {
      builder.invokeStatic(template);
    }
  }
  return true;
}

registerMacros(blocks => {
  blocks.add('let', blockLetMacro);
});
