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

  test('block let with hash works', async function(assert) {
    await render(hbs`
      {{#let (hash foo="foo" bar="bar") as |stuff|}}
        <p>{{stuff.foo}}</p>
        <p>{{stuff.bar}}</p>
      {{/let}}
    `);

    let elements = this.element.getElementsByTagName('p');

    assert.equal(elements[0].textContent.trim(), 'foo');
    assert.equal(elements[1].textContent.trim(), 'bar');
  });

  test('block let with multiple outputs works', async function(assert) {
    await render(hbs`
      {{#let "foo" "bar" as |foo bar|}}
        <p>{{foo}}</p>
        <p>{{bar}}</p>
      {{/let}}
    `);

    let elements = this.element.getElementsByTagName('p');

    assert.equal(elements[0].textContent.trim(), 'foo');
    assert.equal(elements[1].textContent.trim(), 'bar');
  });
});
