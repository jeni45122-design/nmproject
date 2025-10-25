PRODUCT CATALOG WITH MONGODB
A simple and efficient **Product Catalog Management System** built using **Node.js**, **Express**, and **MongoDB**.  
This project demonstrates how to design and implement a RESTful API for managing products — including CRUD operations, search, and filtering — all powered by MongoDB.
 Features

   Create, Read, Update, and Delete (CRUD) products  
   Search and filter products by name, category, or price range  
   Mongoose schema validation  
   RESTful API design  
   Ready for frontend or mobile integration  
   Lightweight and easy to deploy  
 Tech Stack

| Technology | Description |
|-------------|-------------|
| **Node.js** | Backend runtime environment |
| **Express.js** | Web framework for Node.js |
| **MongoDB** | NoSQL database |
| **Mongoose** | ODM (Object Data Modeling) for MongoDB |
| **Dotenv** | Environment variable management |
| **Nodemon** | Development auto-reload tool |
Project Structure
product-catalog/
├── src/
│ ├── config/
│ │ └── db.js # MongoDB connection setup
│ ├── controllers/
│ │ └── productController.js
│ ├── models/
│ │ └── productModel.js
│ ├── routes/
│ │ └── productRoutes.js
│ ├── app.js # Express app setup
│ └── server.js # Server entry point
├── .env # Environment variables
├── package.json
└── README.md
Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/product-catalog-mongodb.git
cd product-catalog-mongodb
2. Install dependencies
bash
Copy code
npm install
3. Set up environment variables
Create a .env file in the root directory and add:

bash
Copy code
PORT=5000
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/product_catalog
4. Run the app
bash
Copy code
npm run dev
Server will start at:
arduino
Copy code
http://localhost:5000
API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get a product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update an existing product
DELETE	/api/products/:id	Delete a product
Example Product Schema
js
Copy code
{
  name: "Wireless Mouse",
  category: "Electronics",
  price: 25.99,
  description: "Ergonomic wireless mouse with USB receiver.",
  inStock: true
}
