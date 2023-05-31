import fs from 'fs';
import mongoose from 'mongoose';

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/testopump', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the images
const imageSchema = new mongoose.Schema({
  selectedFile: { type: String, required: true },
});

// Create a model based on the schema
const Image = mongoose.model('Images', imageSchema);

// Function to crawl a directory and store images in the database
function crawlDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    // Filter only image files
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    // Process each image file
    imageFiles.forEach((imageFile) => {
      const filePath = `${directoryPath}/${imageFile}`;

      // Read the image file as base64
      fs.readFile(filePath, { encoding: 'base64' }, (err, data) => {
        if (err) {
          console.error('Error reading image file:', err);
          return;
        }

        // Create a new image document and save it to the database
        const image = new Image({
          selectedFile: `data:image/jpeg;base64,${data}`,
        });

        image.save();
      });
    });
  });
}

// Specify the directory to crawl
const directoryPath = 'C:/Users/108pa/Parth/Javascript/TestoPump/images';

// Start crawling the directory
crawlDirectory(directoryPath);


console.log("done.")