import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | block-let', function(hooks) {
  setupRenderingTest(hooks);

  test('block let works', async function(assert) {
    await render(hbs`
      {{#let (concat "hello" " " "world") as |helloWorld|}}
        <p>{{helloWorld}}</p>
      {{/let}}
    `);

    assert.equal(this.element.textContent.trim(), 'hello world');
  });
});
