# Test cases for getPriceWithoutExtras

returns the price without extras

- takes book id as parameter
- returns the price of the book not including the price of the extras
- if no book with the given number is found, an exception `nothing found with given id` is thrown

## getPriceWithoutExtras(id) API

### Case 1: get price with a correct id

call:

```js
bookStorage.getPriceWithoutExtras(1);
```

expect: 25

### Case 2: get price with a correct id

call:

```js
bookStoragne.getPriceWithoutExtras(2);
```

expect: 45

### Case 3: get price with a correct id

call:

```js
bookStorage.getPriceWithoutExtras(3);
```

expect: 30

### Case 4: no book found

call:

```js
bookStorage.getPriceWithoutExtras(16);
```

expect to throw `nothing found with the given id`
