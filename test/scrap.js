(async () => {
  var Meta = require("html-metadata-parser");

  var result = await Meta.parser(
    "https://stackoverflow.com/questions/33035050/emoji-not-saved-correctly-in-mongodb"
  );

  console.log("META: ", JSON.stringify(result.meta, null, 3));
  console.log("OG: ", JSON.stringify(result.og, null, 3));
})();
