# Test cases for method getAllBookAuthors

Returns an array of different book authors.

- takes no parameter
- returns an array of different book authors. If no author is found, returns an empty array. The author is added to the result array only once.

## getAllBookAuthors() API

The result format
["Layla Jones", "Anthony Lee", "Emily White"]

### Case 1: get authors with default json

call:

```js
bookStorage.getAllBookAuthors();
```

expect:

```json
["Layla Jones", "Anthony Lee", "Emily White"]
```

### Case 2: Book has no author returns 'null'

testData

```json
[
  [
    {
      "id": 1,
      "name": "NoSql - New Hope",
      "topics": ["noSql", "sql", "future databases"],
      "price": 25,
      "extras": [
        {
          "name": "hard cover",
          "price": 30
        },
        {
          "name": "cd",
          "price": 15
        }
      ]
    },
    {
      "id": 2,
      "name": "Databases - The rise and fall",
      "topics": ["data storages", "sql", "noSql"],
      "price": 45,
      "extras": [
        {
          "name": "signed by author",
          "price": 80
        },
        {
          "name": "dvd",
          "price": 65
        }
      ]
    },
    {
      "id": 3,
      "name": "Hacking databases",
      "topics": [],
      "price": 30,
      "extras": []
    }
  ]
]
```

call:

```js
bookStorage.getAllBookAuthors();
```

expect:
[]
