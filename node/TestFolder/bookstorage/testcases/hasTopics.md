# Test cases for method hasTopics

## hasTopics(id)

-   takes id of the book as a parameter
-   returns true if the book has topics else returns false
-   return false if parameter(id) is missing.

### Case 1: search for a book that has topics with the correct id

call:
```js
bookStorage.hasTopics(1)
```

expect: true


### Case 2: search for a book that has no topics with the correct id

call:
```js
bookStorage.hasTopics(3)
```

expect: false

### Case 3: search for a book with the wrong id

call:
```js
bookStorage.hasTopics(14)
```
return false

### Case 4: missing parameter
call:
```js
bookStorage.hasTopics()
```
return false