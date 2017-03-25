var jimp = require('jimp');
var path = require('path');

module.exports = function (context, message) {

  if (!message || !message.uri) {
    console.log("Message is invalid");
    context.done();
    return;
  }
  
  jimp.read(message.uri, function(err, image) {
    if (err) {
      console.log(err);
      throw err;
    }
    
    // Resize image
    var maxWidth = parseInt(process.env.ImageResizeMaxWidth);
    image.scaleToFit(maxWidth, jimp.AUTO);

    image.getBuffer(jimp.AUTO, function(err, buffer) {
      // Record a name for the output writeFile if none is specified
      if (!context.bindingData.name) {
        context.bindingData.name = path.basename(message.uri);
      }

      console.log(JSON.stringify(context.bindings));

      // Assign buffer to out binding (blob storage)
      context.bindings.resized = buffer;

      // Close context (end function)
      context.done();
    });
  });
}