<h1 align="center">
  <br />
  <img alt="GoBarber" src="https://user-images.githubusercontent.com/48810400/130528219-98256022-719b-4746-ad7d-70fdd27dedca.png" />
  <br />
  <br />
</h1>

<h3 align="center">
  GoBarber
</h3>

<p align="center">
  <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 💬 About
A fullstack barber scheduling app. 

This application was developed during the GoStack bootcamp from [Rocketseat](https://rocketseat.com.br/)

## ✨ Features
- **Authentication and authorization**
- **Schedule barber appointments**
- **See provider availability**
- **Manage scheduled appointments**
- **List appointments by date**
- **Password recovery**
- **User profile**

## 💻 How to use
To clone and run this application you'll need [Git](https://git-scm.com/), [Node.js v14.15.1+](https://nodejs.org/en/) and [Yarn v1.22.5+](https://yarnpkg.com/).

From your command line:
```bash
# Clone this repository
$ git clone https://github.com/pedr0fontoura/gobarber

# Navigate to the repository
$ cd gobarber
```

Before running the **backend**, you'll need to create an `.env` file following the [`.env.example`](https://github.com/pedr0fontoura/gobarber/blob/main/backend/.env.example) schema.

To run the **backend**, do the following:
```bash
# Navigate to the backend dir
$ cd backend

# Install the application dependencies
$ yarn

# Prepare your database with TypeORM migrations
$ yarn typeorm migration:run

# Start the application
$ yarn dev:server
```

For the **frontend**, you'll also need to create an `.env` file following the [`.env.example`](https://github.com/pedr0fontoura/gobarber/blob/main/frontend/.env.example) schema.

To run the **frontend**, do the following:
```bash

# Navigate to the frontend dir
$ cd frontend

# Install the dependencies
$ yarn

# Start the web application
$ yarn start
```

For the **mobile** app, follow this steps:
```bash

# Navigate to the mobile dir
$ cd mobile

# Install the dependencies
$ yarn

# Run react-native
$ yarn start

# Start the Android app
$ yarn android

# or

# Start the IOS app
$ yarn ios
```

## 📝 License

This project is under the MIT license. Check the [LICENSE](LICENSE) for more information.


<h1></h1>


Made by Pedro Fontoura :wave: [Get in touch!](https://twitter.com/pedr0fontoura)
