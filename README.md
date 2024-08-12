# Library Management System

## Overview

The Library Management System is a full-stack application built with NestJS and MongoDB. It provides functionality to manage books and authors, allowing users to perform CRUD (Create, Read, Update, Delete) operations. The system uses the repository pattern for data management and includes robust validation, error handling, and API documentation using Swagger.

Technologies Used
- NestJS: A progressive Node.js framework for building efficient and scalable server-side applications.
- MongoDB: A NoSQL database for storing book and author data.
- TypeScript: A statically typed superset of JavaScript.
- Swagger: For API documentation and testing.
- class-validator: For validating input data.
- class-transformer: For transforming and validating input data.

## Setup Instructions
### Prerequisites
- Node.js (v14 or higher)
- MongoDB: A local or remote MongoDB instance

## Installation

1. Clone the repository:
``` 
git clone https://github.com/your-repo/library-management-system.git
cd library-management-system
```

2. Install dependencies:

```
npm install

```

3. Start Mongo locally

4. Run the application:
```
npm run start

```

## API Documentation
Swagger provides a user-friendly interface to interact with the API. Access the Swagger UI at:

```
http://localhost:3000/api-docs

```


 ## Adding Authors and Books
### Add an Author:

Use the POST /author endpoint to create a new author. Ensure that you provide the necessary details.

### Add a Book:

After adding an author, use the POST /book endpoint to create a new book. The authorId field in the book data should correspond to the ID of the author created earlier.

### Validators Used
class-validator is used to ensure that data sent to the API is valid. It includes:
```
@IsNotEmpty(): Ensures that the field is not empty.
@IsString(): Ensures that the field is a string.
@IsDate(): Ensures that the field is a date.
@IsMongoId(): Ensures that the field is a valid MongoDB ObjectId.
class-transformer is used to transform plain objects into class instances, particularly for converting string dates into Date objects.
```
##Repository Pattern
The project employs the repository pattern to abstract data access logic. Repositories are used for interacting with MongoDB collections and handling CRUD operations. This separation allows for cleaner code and easier testing.

