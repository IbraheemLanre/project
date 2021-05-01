# Test cases for getBookTopics

## getBookTopics(id) API

returns an array of book topics. If none found, returns an empty array.
-   takes book id as a paramter
-   retunrs topics as an array

### Case 1: get book's topic with correct id 1

call: 
```js
bookStorage.getBookTopics(1)
```

expect:
["noSql", "sql", "future databases"]

### Case 2: get book's topic with correct id 2
call: 
```js
bookStorage.getBookTopics(2)
```

expect:
["data storages", "sql", "noSql"]

### Case 3: get book's topic with correct id 3
call: 
```js
bookStorage.getBookTopics(3)
```

expect:
[]

### Case 4: Missing parameter

call: 
```js
bookStorage.getBookTopics()
```
expect:
[]