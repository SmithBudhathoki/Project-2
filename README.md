# Item Management API Report

This document provides an overview of the Item Management API, including its structure, functionality, and key components.

## Overview

The Item Management API is built using Node.js, Express, and MongoDB. It allows users to create and manage items with attributes such as name, category, and price.

## File Structure

The project consists of the following key files:

- **db.js**: Handles the MongoDB connection.
- **itemController.js**: Contains the logic for creating items.
- **itemModel.js**: Defines the schema and model for items.
- **itemRoutes.js**: Sets up the routes for item-related API endpoints.
- **server.js**: Initializes the Express server and connects to the database.

## File Descriptions

### 1. `db.js`

- **Purpose**: Establishes a connection to the MongoDB database.
- **Key Functionality**:
  - Uses Mongoose to connect to the database.
  - Logs a success message upon successful connection or an error message if the connection fails.

```javascript
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
