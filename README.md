# forms_nodejs

A Node.js web application built with Express.js, Mongoose, and EJS for handling user forms and product management.

## Features

- User registration and authentication
- Product management
- Form handling
- MongoDB integration with Mongoose
- EJS templating for dynamic views

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/mrhacker-kde/project101.git
   cd forms_nodejs
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the server:
   ```
   npm start
   ```

The application will be running on `http://localhost:3000`.

## Project Structure

```
forms_nodejs/
├── controllers/
│   ├── form.js
│   └── product_contr.js
├── models/
│   ├── product_mods.js
│   └── userDb.js
├── public/
│   ├── css/
│   │   └── acc.css
│   ├── js/
│   │   └── acc.js
│   └── src/
│       └── upload/
├── routes/
│   └── main_rts.js
├── views/
│   ├── about.ejs
│   ├── acc.ejs
│   ├── contact.ejs
│   ├── index.ejs
│   └── products.ejs
├── index.js
├── package.json
└── README.md
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **Mongoose**: MongoDB object modeling
- **EJS**: Templating engine
- **bcrypt**: Password hashing
- **jsonwebtoken**: JWT authentication
- **Axios**: HTTP client
- **CORS**: Cross-origin resource sharing

## Routes

- `/`: Home page
- `/contact`: Contact page
- `/about`: About page
- `/acc`: Account page
- `/products`: Products page

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.