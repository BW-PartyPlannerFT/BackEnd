# BackEnd
Heroku App URL (need before each method url):https://partyplanner-b.herokuapp.com

REGISTER and LOGIN

Endpoint: POST /api/auth/register
Require username, email password / must be < 255 characters /username must be unique

Endpoint: POST /api/auth/login
Require username , password

PARTIES

Endpoint: /GET /api/parties
Example;

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

CATEGORIES

Endpoint: /GET /api/categories
Example;

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
    },
    {
        "id": 4,
        "category": "Garden party"
    },
    {
        "id": 5,
        "category": "Dinner party"
    },
    {
        "id": 6,
        "category": "Cocktail party"
    },
    {
        "id": 7,
        "category": "Tea Party"
    },
    {
        "id": 8,
        "category": "Showers"
    }
]

PARTY SHOPPING LIST

Endpoint: GET	/api/parties/:id/shoppingList	
Must be a validated party id 

Endpoint: POST	/api/parties/:id/shoppingList	
Must be a validated party id / Require item, price, party_id, purchased

Endpoint: PUT	/api/parties/:id/shoppingList/:itemId	
Must be a validated party id / Must be validated item id

Endpoint: DELETE	/api/parties/:id/shoppingList/:itemId	
Must be a validated party id / Must be validated item id

Example; /GET /api/parties/2/shoppingList
[
    {
        "id": 2,
        "item": "Balloon",
        "price": 10
    }
]

PART TODO LIST

Endpoint: GET	/api/parties/:id/todoList	
Must be a validated party id 

Endpoint: POST	/api/parties/:id/todoList	
Must be a validated party id / Require task, party_id

Endpoint: PUT	/api/parties/:id/todoList/:taskId	
Must be a validated party id / Must be a validated task id

Endpoint: DELETE	/api/parties/:id/todoList/:taskId	
Must be a validated party id / Must be a validated task id

Example; GET /api/todoLists
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

PARTY PICTURES

Endpoint: GET	/api/parties/:id/pictures	
Must be a validated party id 

Endpoint: POST	/api/parties/:id/pictures	
Must be a validated party id / Require url,party_id

Endpoint: DELETE	/api/parties/:id/pictures/:picId	
Must be a validated party id / Muse be validated url id

Example; GET /api/pictures
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