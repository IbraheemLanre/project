# Test cases for getPriceOfTheExtras

## getPriceOfTheExtras(id) API

returns the total price of extras bundled with the book

- takes book id as a parameter
- returns the total price of extras. If no extras is found returns 0
- if no book with the given number if found, an exception is `nothing found with given id` is thrown

### Case 1: get price with correct id=1

call:

```js
bookStorage.getPriceOfTheExtras(1);
```

expect: 45

### Case 2: get price with correct id=2

call:

```js
bookStorage.getPriceOfTheExtras(2);
```

expect: 145

### Case 3: get price with correct id=3

call:

```js
bookStorage.getPriceOfTheExtras(3);
```

expect: 0

### Case 4: no book found

call:

```js
bookStorage.getPriceOfTheExtras(65);
```

expect to throw `nothing found with given id`
s