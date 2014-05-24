"use strict";
Object.defineProperties(exports, {
  printHello: {get: function() {
      return printHello;
    }},
  __esModule: {value: true}
});
function printHello() {
  console.info("Hello");
}
xtag.register('spa2014-header', {
  lifecycle: {
    created: function() {
      console.info("header created");
    },
    inserted: function() {
      console.info("header inserted");
    },
    removed: function() {
      console.info("header removed");
    },
    attributeChanged: function() {
      console.info("header attribute changed");
    }
  },
  events: {},
  accessors: {},
  methods: {}
});
