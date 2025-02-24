# run-time-microfrontend-integration setup

This project demonstrates a run-time microfrontend integration approach using React. It consists of two separate React applications:

1. app-shell: The main container application that injects the microfrontend at run time.

2. microfrontend-header: A microfrontend providing a header component.

**Project Structure**

run-time-microfrontend-integration/
|-- app-shell/
|-- microfrontend-header/


## How It Works

* app-shell serves as the host and runs on port 3000.
*
* microfrontend-header provides a React-based header component and runs on port 3001.
*
* During the application runtime, app-shell pulls in microfrontend-header and integrates it.


## 🛠 Setting Up in IntelliJ IDEA

### Prerequisites

Ensure you have the following installed:

1. IntelliJ IDEA (Ultimate recommended for JavaScript support)
2. Node.js (>=18)
3. npm or yarn

### Opening the Project

1. Open IntelliJ IDEA.
2. Go to File > Open... and select the run-time-microfrontend-integration folder.
3. IntelliJ will automatically detect the Node.js-based projects.
4. Open the built-in terminal in IntelliJ (View > Tool Windows > Terminal) or use the integrated Run Configurations.

### Installing Dependencies

For app-shell:

`cd app-shell
npm install`

For microfrontend-header:

`cd microfrontend-header
npm install`

Running the Applications

Start microfrontend-header on port 3001:

`cd microfrontend-header
npm start`

Start app-shell on port 3000:

`cd app-shell
npm start`

Access the applications:

app-shell: http://localhost:3000

microfrontend-header: http://localhost:3001


## 🏗 Build and Deployment

To build the apps:

For microfrontend-header:

`cd microfrontend-header
npm run build`

For app-shell:

`cd app-shell
npm run build`

## 🤝 Contributing

Feel free to open issues or submit pull requests.

## 📜 License

This project is licensed under the MIT License.
