'use strict';

/* eslint-env node */

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    babel: {
      includePolyfill: true,
    },
  });

  return app.toTree();
};
