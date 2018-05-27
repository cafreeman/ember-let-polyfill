// Support for 3.0 - 3.1
const { _registerMacros } = Ember.__loader.require('ember-glimmer');
const { compileList } = Ember.__loader.require('@glimmer/runtime');

_registerMacros(blocks => {
  blocks.add('let', (params, hash, _default, inverse, builder) => {
    compileList(params, builder);
    builder.invokeStatic(_default, params.length);
  });
});
