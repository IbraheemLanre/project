# Test cases for the constructor

## constructor API
The data storage json object is passed as a parameter to the constructor. If the parameter is missing, the constructor throws an exception `'data storage missing'`.

## Test cases

### Test 1: Object created with json object as a parameter
call:
```js
const bookStorage = new BookStorage(jsonObject);
```

test if the field to store the json object has the same object as the given parameter
expect:
```js
book.jsonData === jsonObject
```

### Test 2: Missing parameter throws an exception `'data storage missing'`
call:
```js
const bookStorage = new BookStorage()
```
expect:
throws an exception `'data storage missing'`
