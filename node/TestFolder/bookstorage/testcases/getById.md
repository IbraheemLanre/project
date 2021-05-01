# Test cases for the method getById

## getById(id) API

- takes the id of the book as a parameter.

- returns the book object matching the id or null if there is no match.

- if the parameter is missing, throws an exception `'parameter missing'`

- the format of the returned object

```json
{
  "id": 1,
  "name": "NoSql - New Hope",
  "author": "Layla Jones",
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
}
```

### case 1: get a book with the correct id = 1

call:

```js
bookStorage.storage(1);
```

expect:

```json
{
  "id": 1,
  "name": "NoSql - New Hope",
  "author": "Layla Jones",
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
}
```

### case 2: get a book with the correct id = 2

call:

```js
bookStorage.storage(2);
```

expect:

```json
{
  "id": 2,
  "name": "Databases - The rise and fall",
  "author": "Antony Lee",
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
}
```

### case 3: get a book with te correct id = 3

call:

```js
bookStorage.storage(3);
```

expect:

```json
{
  "id": 3,
  "name": "Hacking databases",
  "author": "Emily White",
  "topics": [],
  "price": 30,
  "extras": []
}
```

### case 4: With a wrong id

call:

```js
bookStorage.storage(7);
```

expect to get null

### case 5: Missing parameter

call:

```js
bookStorage.storage();
```

expect to throw `'parameter missing'`

### case 6: With an id as a string instead of a number
