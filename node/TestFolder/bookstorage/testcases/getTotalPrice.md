# Test cases for getTotalPrice

## getTotalPrice(id) API

returns the total price of the book including the total price of the extras

- takes book id as parameter
- returns the price of the book including the total price of the extras
- if no book with the given number is found, an exception `nothing found with given id` is thrown

### Case 1: get total price with a correct id = 1

call:

```js
bookStorage.getTotalPrice(1);
```

expect: 70

### Case 2: get total price with a correct id = 2

call:

```js
bookStorage.getTotalPrice(2);
```

expect: 190

### Case 3: get total price with a correct id = 3

call:

```js
bookStorage.getTotalPrice(3);
```

expect: 30

### Case 4: no book with the given id found

call:

```js
bookStorage.getTotalPrice(100);
```

expect to throw `nothing found with given id`
