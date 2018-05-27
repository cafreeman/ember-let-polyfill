// Support for 3.1 - 3.2
const { _registerMacros } = Ember.__loader.require('ember-glimmer');

_registerMacros(blocks => {
  blocks.add('let', (params, _hash, template, _inverse, builder) => {
    if (template !== null) {
      if (params !== null) {
        builder.compileParams(params);
        builder.invokeStaticBlock(template, params.length);
      } else {
        builder.invokeStatic(template);
      }
    }
    return true;
  });
});
