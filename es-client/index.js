var elasticsearch = require("elasticsearch");

var client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  httpAuth: "elastic:changeme"
});

client
  .search({
    index: "contacts",
    body: {
      query: {
        range: {
          age: {
            gte: 19
          }
        }
      }
    }
  })
  .then(
    function(resp) {
      var hits = resp.hits.hits;
    },
    function(err) {
      console.trace(err.message);
    }
  );
