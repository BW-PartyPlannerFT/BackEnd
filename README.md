# BackEnd

Heroku App URL (need before each method url):https://partyplanner-b.herokuapp.com

## REGISTER and LOGIN

Endpoint: /POST `/api/auth/register`
* Requires: 
```
username
email
password 
must be < 255 characters /username must be unique
```

Example;
```
{
"username": "Ava",
"email": "ava@lambdaschool.com",
"password": "ava"
}
```

Endpoint: /POST /api/auth/login
* Requires:
``` 
username  
password
```

Example;
```
{
"username": "Ava",
"password": "ava"
}
```



## PARTIES

Endpoint: /GET `/api/parties`

Endpoint: /GET `/api/parties/:id`

* Get's a spefic party with a specific party Id.

Endpoint: /POST `/api/parties`

* Adds a new party/Must be a validated party id 

* Requires:
``` 
party_name
host 
guests
theme
date
budget
category_id
```

Endpoint: /PUT `/api/parties/:id`

* Updates a party by Id//Must be a validated party id 

Endpoint: /DELETE `/api/parties/:id`

* Deletes a specific party by Id/Must be a validated party id 

Example;
```
[
{
"id": 1,
"party_name": "Brenda's dinner party",
"host": "Hellen",
"guests": "30",
"theme": "Rustic BBQ Dinner",
"date": "12/12/2019",
"budget": 1000,
"category_id": 5
}
]
```



## CATEGORIES

Endpoint: /GET `/api/categories`

Endpoint: /GET `/api/categories/:id`

* Get's a spefic category with a specific category Id.

Endpoint: /POST `/api/categories`

* Adds a new category/Must be a validated category id 

* Requires 
```
category
```

Endpoint: /PUT `/api/categories/:id`

* Updates a category by id//Must be a validated category id 

Endpoint: /DELETE `/api/categories/:id`

* Deletes a specific category by Id/Must be a validated category id 


Example;
```
[
{
"id": 1,
"category": "Graduation Party"
},
{
"id": 2,
"category": "Birthday Party"
},
{
"id": 3,
"category": "Surprise Party"
}
]
```



## PARTY SHOPPING LIST

Endpoint: GET `/api/parties/:id/shoppingList`
* Must be a validated party id

Endpoint: POST `/api/parties/:id/shoppingList`
* Must be a validated party id 
* Requires
```
item 
price
party_id 
purchased
```

Endpoint: PUT `/api/parties/:id/shoppingList/:itemId`
* Must be a validated party id / Must be validated item id

Endpoint: DELETE `/api/parties/:id/shoppingList/:itemId`
* Must be a validated party id / Must be validated item id

Example; 
```
/GET /api/parties/2/shoppingList
[
{
"id": 2,
"item": "Balloon",
"price": 10
}
]
```


## PARTY TODO LIST

Endpoint: /GET `/api/parties/:id/todoList`
* Must be a validated party id

Endpoint: /POST `/api/parties/:id/todoList`
* Must be a validated party id 
* Requires 
```
task 
party_id
```

Endpoint: /PUT `/api/parties/:id/todoList/:taskId`
* Must be a validated party id / Must be a validated task id

Endpoint: /DELETE `/api/parties/:id/todoList/:taskId`
* Must be a validated party id / Must be a validated task id

Example; 
```
/GET /api/todoLists
[
{
"id": 1,
"task": "Send invitations",
"completed": 1,
"party_id": 1
},
{
"id": 2,
"task": "Go shopping",
"completed": 1,
"party_id": 2
},
{
"id": 3,
"task": "Reserve venue",
"completed": 0,
"party_id": 1
}
]
```



## PARTY PICTURES

Endpoint: /GET `/api/pictures`

Endpoint: /GET `/api/parties/:id/pictures`
* Must be a validated party id

Endpoint: /POST `/api/parties/:id/pictures`
* Must be a validated party id 
* Requires
```
url
party_id
```

Endpoint: /DELETE `/api/parties/:id/pictures/:picId`
* Must be a validated party id / Must be a validated url id

Example; 
```
GET /api/pictures
[
{
"id": 1,
"url": "https://imgur.com/t23BL3j",
"party_id": 1
},
{
"id": 2,
"url": "https://imgur.com/FdENpL4",
"party_id": 2
}
]
```







## LIBRARIES USED

* bcryptjs
https://www.npmjs.com/package/bcryptjs Using bcrypt is a secured way to store passwords in my database. Incorporates a salt to protect against rainbow table attacks, over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

* cors
https://enable-cors.org/ Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.

* dotenv
https://www.npmjs.com/package/dotenv Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

* express
https://expressjs.com/ Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

* helmet
https://github.com/helmetjs/helmet Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

* jsonwebtoken
https://jwt.io/ JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

* knex
https://knexjs.org/ Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

* knex-cleaner
Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex. Great for integration tests.

* sqlite3
https://sqlite.org/ SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world. SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.
