# React Amazon Clone

<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/232a2cbc-79fb-4c46-bf6e-d9f3b78dd699" width="300" height="100" />

Amazon clone built with React and Firebase.

## Table of Contents

* [Introduction](#introduction)
* [Features](#features)
* [Demo](#demo)
* [Installation](#installation)
* [Usage](#usage)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)

## Introduction

This project is a clone of the popular e-commerce platform Amazon, created using React for the frontend and Firebase for backend services. It aims to replicate the core features of Amazon.

## Features

* **User Authentication:** Allow users to sign up, log in, and log out securely.
* **Product Listing:** Display a variety of products with details such as name, price, and images.
* **Shopping Cart:** Enable users to add products to the cart and proceed to checkout.
* **Order Processing:** Simulate the order processing flow, including payment integration.

## Demo

<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/8ef44bfd-4075-4e46-8e73-7deb2ff08107" width="860" height="380"/>
<br><br><br>
<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/7c16c64d-c649-416c-82b7-3a3e6f758c43" wdith="900" height="380"/>
<br><br><br>
<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/0cb7572b-d3bd-4a70-8d48-6d6cca5abd2f" width="860" height="380" />
<br><br><br>
<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/96157040-96bf-4fdd-aecb-adeba076e82e" width="860" height="380" />
<br><br><br>
<img src="https://github.com/Shaban-Eissa/React-Amazon-Clone/assets/49924090/1a85f682-b808-4860-8184-8ca42ec92e64" width="860" height="380" />

## Installation

1. Clone the repository:
    
    ```bash
    git clone https://github.com/Shaban-Eissa/React-Amazon-Clone.git
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd React-Amazon-Clone
    ```
    
3. Install dependencies:
    
    ```bash
    npm install
    ```
    
4. Set up Firebase:
    
    * Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    * Set up authentication.
    * Obtain your Firebase configuration and replace it in `src/Firebase/firebase.js`.
    * Install Firebase CLI by running the following command in your terminal: `npm install -g firebase-tools`.

5. Open terminal to start firebase cloud functions:
    ```bash
    firebase emulators:start
    ```
  
5. Open another terminal to start the application:
    
    ```bash
    npm start
    ```
    
6. Open your browser and visit [http://localhost:3000](http://localhost:3000).
    

## Usage

* Sign up or log in to explore the products.
* Add products to the cart and proceed to checkout.

## Technologies Used

* React
* Firebase (Authentication, Cloud Functions)
* Axios
* Stripe
* Material-UI

## Contributing

Feel free to contribute to this project. Fork the repository and submit a pull request.
