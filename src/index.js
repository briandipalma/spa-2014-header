export function printHello() {
	console.info("Hello");
}

// Create your component here
// http://x-tags.org/docs

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
	events: {

	},
	accessors: {

	},
	methods: {

	}
});