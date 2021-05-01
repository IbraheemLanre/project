# Test cases for method getAllBooksByAuthor

## getAllBooksByAuthor(author) API

Returns an array of book objects of given author

- parameters: author of the book to be searched
- returns an array of book objects of a given author. If no book of a given author is found, returns an empty array.
- if a parameter author is missing, an exception **'missing parameter'** is thrown.

- The format of the returned object
```json
[
    {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [{
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
]
```

### Case 1: get a book with the correct author "Antony Lee"

call:
```js
bookStorage.getAllBooksByAuthor("Antony Lee")
```

expect:
```json
[
    {
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [{
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
]
```

### Case 2: get a book with the wrong author "Lemon Grass"

call:
```js
bookStorage.getAllBooksByAuthor("Lemon Grass")
```

expect:
[]

### Case 3: Missing parameter

call:
```js
bookStorage.getAllBooksByAuthor()
```

expect to throw an exception `'missing parameter'`