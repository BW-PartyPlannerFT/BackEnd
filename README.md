# BackEnd
Heroku App URL (need before each method url):https://partyplanner-b.herokuapp.com

Register and Login

Parties

**Example /GET /api/parties

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

Categories

**Example /GET /api/categories

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

Party shopping List