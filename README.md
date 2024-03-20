# N.Headphone

N.Headphone is an e-commerce application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and GSAP. The application provides a seamless shopping experience for users to browse and purchase headphones online.

## Frontend Features

- **Authentication Integration**: Users are required to log in to add items to their cart. User data is retrieved upon login, providing a personalized shopping experience.
- **GSAP Animation**
- **Advanced Cursor**: An interactive cursor is implemented to enhance user engagement and provide a unique browsing experience.
- **Dynamic Styling**: GSAP is used to add dynamic background and color changes during page transitions
- **Image Masking**: CSS clip-path is used to create visually appealing image effects on hover, enhancing the overall look and feel of the application.

## Backend Features

- **User Authentication**: Users can sign up and log in to the application using JWT authentication.
- **Product Management**: The backend provides endpoints for adding, retrieving, and removing products from the database.
- **Cart Management**: Users can add and remove products from their cart, and the backend provides endpoints for retrieving cart data.
- **Middleware**: The backend uses middleware for handling image uploads and enabling CORS.

## Setup

To set up the backend of N.Headphone, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Update the MongoDB connection string in `app.js` to point to your MongoDB database.
5. To initiate the backend server, execute node index.js within the project directory. The server will default to port 4000. For both frontend and admin tasks, utilize "npm run dev".

## Dependencies

- Express.js: Web application framework for Node.js.
- Mongoose: MongoDB object modeling tool.
- JWT: JSON Web Token implementation for authentication.
- Multer: Middleware for handling multipart/form-data, used for image uploads.
- Cors: Middleware for enabling CORS (Cross-Origin Resource Sharing).

## Endpoints

- `GET /`: Root endpoint, returns a welcome message.
- `GET /allproducts`: Retrieves all products from the database.
- `POST /addproduct`: Adds a new product to the database.
- `POST /removeproduct`: Removes a product from the database.
- `POST /signup`: Registers a new user.
- `POST /login`: Logs in an existing user.
- `GET /homeproducts`: Retrieves a subset of products for the home page.
- `POST /addtocart`: Adds a product to the user's cart.
- `POST /removefromcart`: Removes a product from the user's cart.
- `GET /getcart`: Retrieves the user's cart data.

## Middleware

- `fetchUser`: Middleware to verify and fetch user information from the JWT token in the request header.

  ## Screenshot
  ![Home Image](image/home.png)

  ![Cart Image](image/cart.png)

    ![Team Image](image/team.png)
