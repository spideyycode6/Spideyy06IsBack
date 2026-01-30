# Day-5: Express.js REST API - Notes Application

## Overview
Learn how to build a simple REST API using Express.js. This project lets you create, read, update, and delete notes.

## What You'll Learn
- Setting up an Express server
- Using HTTP methods: POST, GET, PATCH, DELETE
- Creating API routes
- Parsing JSON data with middleware
- Using correct HTTP status codes
- Building a simple REST API

## Project Files
```
Day-5/
├── server.js          # Starts the server
├── src/
│   └── script.js      # Express app and routes
├── package.json       # Dependencies
└── README.md          # This file
```

## Tools Used
- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **Nodemon**: Auto-restarts server on changes

## API Endpoints

### Create a Note
- **Type**: POST
- **URL**: `/notes`
- **Send**: `{ "title": "your note title" }`
- **Get Back**: `"note is created successfully"`

### Get All Notes
- **Type**: GET
- **URL**: `/notes`
- **Get Back**: `{ "notes": [...] }`

### Update a Note
- **Type**: PATCH
- **URL**: `/notes/:index`
- **Send**: `{ "title": "updated title" }`
- **Get Back**: `"updated successfully!!"`

### Delete a Note
- **Type**: DELETE
- **URL**: `/notes/:index`
- **Get Back**: `"Data deleted!!"`

## How to Start

1. **Install packages**
    ```bash
    npm install
    ```

2. **Run the server**
    ```bash
    npm run dev
    ```
    Server runs on `http://localhost:3000`

3. **Test the API**
    Use Postman, Insomnia, or cURL to test.

## Quick Examples with cURL

```bash
# Create a note
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My note"}'

# Get all notes
curl http://localhost:3000/notes

# Update note 0
curl -X PATCH http://localhost:3000/notes/0 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated"}'

# Delete note 0
curl -X DELETE http://localhost:3000/notes/0
```

## Future Ideas
- Save notes to a database
- Check if data is valid
- Handle errors better
- Add user login
- Show notes page by page

