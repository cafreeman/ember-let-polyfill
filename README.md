ember-let-polyfill
==============================================================================

This addon provides a polyfill for the block `let` feature added in Ember 3.2

Installation
------------------------------------------------------------------------------

```
ember install ember-let-polyfill
```


Usage
------------------------------------------------------------------------------

```hbs
{{#let (concat "hello" " " "world") as |msg|}}
  <p>{{msg}}</p>
{{/let}}
```

Migration
------------------------------------------------------------------------------

Applications
After you upgrade your application to Ember 3.2, you should remove ember-let-polyfill from your package.json.

Addons
Addons generally support many different Ember versions, so leaving ember-let-polyfill in place for consumers of your addon is perfectly normal. When the addon no longer supports Ember versions older than 3.2, we recommend removing ember-let-polyfill from your package.json and doing a major version bump.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
