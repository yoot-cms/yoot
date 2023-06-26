import sql from "$lib/db"

const data = [ {
    "id": "1",
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@example.com",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "country": "United States",
      "zipCode": "10001"
    }
  },
  {
    "id": "2",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "janesmith@example.com",
    "address": {
      "street": "456 Elm St",
      "city": "Los Angeles",
      "state": "CA",
      "country": "United States",
      "zipCode": "90001"
    }
  },
  {
    "id": "3",
    "firstName": "Bob",
    "lastName": "Johnson",
    "email": "bobjohnson@example.com",
    "address": {
      "street": "789 Oak St",
      "city": "Chicago",
      "state": "IL",
      "country": "United States",
      "zipCode": "60601"
    }
  }
  // Add more user objects as needed
]

