'use strict';

const VersionChecker = require('ember-cli-version-checker');
let hasBeenWarned = false;

module.exports = {
  name: 'ember-let-polyfill',

  included() {
    this._super.included.apply(this, arguments);

    let emberVersion = new VersionChecker(this).forEmber();

    let version = this._determineVersionRange(emberVersion);

    if (version) {
      this.import (`vendor/ember-let/${version}/register.js`);
    } else if (this.parent === this.project && !hasBeenWarned) {
      this.ui.writeWarnLine('ember-let-polyfill is not required for Ember 3.2.0-beta.1 and later, please remove from your `package.json`.');
      hasBeenWarned = true;
    }
  },

  treeForVendor(rawVendorTree) {
    let babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');

    let transpiledVendorTree = babelAddon.transpileTree(rawVendorTree, {
      'ember-cli-babel': {
        compileModules: false
      }
    });

    return transpiledVendorTree;
  },

  _ensureThisImport: function() {
    if (!this.import) {
      this._findHost = function findHostShim() {
        var current = this;
        var app;
        do {
          app = current.app || app;
        } while (current.parent.parent && (current = current.parent));
        return app;
      };
      this.import = function importShim(asset, options) {
        var app = this._findHost();
        app.import (asset, options);
      };
    }
  },

  _determineVersionRange(emberVersion) {
    let version;

    if (emberVersion.lt('2.10.0')) {
      version = 'ember-lt-2-10';
    } else if (emberVersion.lt('2.13.0')) {
      version = 'ember-lt-2-13';
    } else if (emberVersion.lt('2.15.0-alpha.1')) {
      version = 'ember-lt-2-15';
    } else if (emberVersion.lt('3.0.0-alpha.1')) {
      version = 'ember-lt-3-0';
    } else if (emberVersion.lt('3.2.0-alpha.1')) {
      version = 'ember-lt-3-2';
    } else {
      version = false;
    }

    return version;
  }
};
