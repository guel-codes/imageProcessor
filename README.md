# Image Processing API

This project aims to give you a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database. The project you create serves two purposes: to prepare you for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects. This project barely touches the surface of what is possible but will prove your ability to use what you’ve learned in real-world scenarios.

For this project, refactor and test as much as possible while you are building. Since you are using TypeScript and an unfamiliar library, it is sometimes easier to write and build in plain JS to see what your functions return; remember your submission needs to be in TypeScript. As your skills improve, typing in TypeScript will feel more intuitive. Make sure to remove any debugging code from your final submission.

Available scripts:

npm run build compiles the application
npm run start starts the server on port 3000
npm run test runs the written jasmine tests

API endpoints:

localhost:3000/api/images?filename={insert filename}&width={insert width}&height={insert height} Resizes the given image to the given size and returns it to the user. If the image has been created previously then the previous image is returned. Example: localhost:3000/api/images?filename=fjord&width=700&height=400
localhost:3000/api/help Upon receiveing a request other than /api/images the user receives instructions about using the API and the list of the available images.

## License

[License](LICENSE.txt)
# building-a-server
