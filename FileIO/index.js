var request = require("request");
var fs = require("fs");

module.exports = {
  upload: function(filePath, expires) {
    var requestUrl = "https://file.io";

    if (expires) {
      requestUrl += "/?expires=" + expires;
    }

    var formData = {
      file: fs.createReadStream(filePath),
    };

    request.post({
      url: requestUrl,
      formData: formData
    }, function(error, respHeader, respBody) {
      if (error) {
        return console.error("Upload fail: %s", error);
      }

      respBody = JSON.parse(respBody);

      if (respBody.success == true) {
        console.log(
          "Upload success:\n- Key: %s\n- Link: %s\n- Expiry: %s",
          respBody.key,
          respBody.link,
          respBody.expiry
        );
      } else {
        console.log("Upload error: %s", respBody.message);
      }
    });
  }
};
