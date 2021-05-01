"use strict";

const BookStorage = require("../BookStorage");
const dataStorage = require("../datastorage.json");

describe("Testing constructor", () => {
  test("Object created with json object as a parameter", () => {
    const bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.storage).toEqual(dataStorage);
  });

  test("Object created with an empty array as a parameter", () => {
    const bookStorage = new BookStorage([]);
    expect(bookStorage.storage).toEqual([]);
  });

  test("Missing parameter throws an exception", () => {
    expect(() => new BookStorage()).toThrow("data storage missing");
  });
});

describe("Test cases for the method getById", () => {
  let bookStorage;

  test("get a book with the correct id", () => {
    const data = {
      id: 1,
      name: "NoSql - New Hope",
      author: "Layla Jones",
      topics: ["noSql", "sql", "future databases"],
      price: 25,
      extras: [
        {
          name: "hard cover",
          price: 30,
        },
        {
          name: "cd",
          price: 15,
        },
      ],
    };

    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getById(1)).toEqual(data);
  });

  test("get a book with the correct id", () => {
    const data = {
      id: 2,
      name: "Databases - The rise and fall",
      author: "Antony Lee",
      topics: ["data storages", "sql", "noSql"],
      price: 45,
      extras: [
        {
          name: "signed by author",
          price: 80,
        },
        {
          name: "dvd",
          price: 65,
        },
      ],
    };
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getById(2)).toEqual(data);
  });

  test("get a book with the correct id", () => {
    const data = {
      id: 3,
      name: "Hacking databases",
      author: "Emily White",
      topics: [],
      price: 30,
      extras: [],
    };
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getById(3)).toEqual(data);
  });

  test("get a book with a wrong id", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getById(10)).toBeNull();
  });

  test("missing parameter", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(() => bookStorage.getById()).toThrow("parameter missing");
  });
});

describe("Testing method getAllIdsByName", () => {
  let bookStorage;

  test("get books ids with correct names", () => {
    const expectedResult = [1];
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllIdsByName("NoSql - New Hope")).toEqual(
      expectedResult
    );
  });

  test("get books ids with correct names", () => {
    const expectedResult = [2];
    bookStorage = new BookStorage(dataStorage);
    expect(
      bookStorage.getAllIdsByName("Databases - The rise and fall")
    ).toEqual(expectedResult);
  });

  test("get books ids with correct names", () => {
    const expectedResult = [3];
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllIdsByName("Hacking databases")).toEqual(
      expectedResult
    );
  });

  test("get books ids with wrong names", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllIdsByName("No Database")).toEqual([]);
  });

  test("Missing parameters", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllIdsByName()).toEqual([]);
  });
});

describe("Testing for getAllBookAuthors", () => {
  let bookStorage;
  const expectedResult = ["Layla Jones", "Antony Lee", "Emily White"];

  test("get authors with default json", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllBookAuthors()).toEqual(expectedResult);
  });

  // making sure an author is added only once
  test("get authors with default json", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllBookAuthors().sort()).toEqual(
      expectedResult.sort()
    );
  });

  test("if book has no author ", () => {
    const testData = [
      {
        id: 1,
        name: "NoSql - New Hope",
        topics: ["noSql", "sql", "future databases"],
        author: "",
        price: 25,
        extras: [
          {
            name: "hard cover",
            price: 30,
          },
          {
            name: "cd",
            price: 15,
          },
        ],
      },
      {
        id: 2,
        name: "Databases - The rise and fall",
        topics: ["data storages", "sql", "noSql"],
        author: "",
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
      {
        id: 3,
        name: "Hacking databases",
        author: "",
        topics: [],
        price: 30,
        extras: [],
      },
    ];

    bookStorage = new BookStorage(testData);
    expect(bookStorage.getAllBookAuthors()).toEqual([]);
  });

  test("no books in the bookStorage", () => {
    bookStorage = new BookStorage([]);
    expect(bookStorage.getAllBookAuthors()).toEqual([]);
  });
});

describe("Testing method getAllBooksByAuthor", () => {
  let bookStorage;

  test("get a book with the correct author", () => {
    const expectedResult = [
      {
        id: 2,
        name: "Databases - The rise and fall",
        author: "Antony Lee",
        topics: ["data storages", "sql", "noSql"],
        price: 45,
        extras: [
          {
            name: "signed by author",
            price: 80,
          },
          {
            name: "dvd",
            price: 65,
          },
        ],
      },
    ];
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllBooksByAuthor("Antony Lee")).toEqual(
      expectedResult
    );
  });

  test("get a book with the wrong author", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getAllBooksByAuthor("Lemon Grass")).toEqual([]);
  });

  test("missing parameter", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(() => bookStorage.getAllBooksByAuthor()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing method hasTopics", () => {
  let bookStorage;

  test("search for a book that has topics with the correct id", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.hasTopics(1)).toBeTruthy();
  });

  test("search for a book that has no topics with the correct id", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.hasTopics(3)).toBeFalsy();
  });

  test("search for a book with the wrong id", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.hasTopics(14)).toBeFalsy();
  });

  test("missing parameter", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.hasTopics()).toBeFalsy();
  });
});

describe("Testing method getBookTopics", () => {
  let bookStorage;

  test("get book's topic with correct id", () => {
    bookStorage = new BookStorage(dataStorage);
    const expectedResult = ["noSql", "sql", "future databases"];
    expect(bookStorage.getBookTopics(1)).toEqual(expectedResult);
  });

  test("get book's topic with correct id", () => {
    bookStorage = new BookStorage(dataStorage);
    const expectedResult = ["data storages", "sql", "noSql"];
    expect(bookStorage.getBookTopics(2)).toEqual(expectedResult);
  });

  test("get book without topic with correct id", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getBookTopics(3)).toEqual([]);
  });

  test("missing parameter", () => {
    bookStorage = new BookStorage(dataStorage);
    expect(bookStorage.getBookTopics()).toEqual([]);
  });
});

describe("Testing method getPriceWithoutExtras", () => {
  let bookStorage;

  beforeEach(() => {
    bookStorage = new BookStorage(dataStorage);
  });

  describe("Test to return price", () => {
    test("for id = 1", () => {
      expect(bookStorage.getPriceWithoutExtras(1)).toBe(25);
    });

    test("for id = 2", () => {
      expect(bookStorage.getPriceWithoutExtras(2)).toBe(45);
    });

    test("for id = 3", () => {
      expect(bookStorage.getPriceWithoutExtras(3)).toBe(30);
    });

    test("no book found", () => {
      expect(() => bookStorage.getPriceWithoutExtras()).toThrow(
        "nothing found with given id"
      );
    });
  });
});

describe("Testing method getTotalPrice", () => {
  let bookStorage;

  beforeEach(() => {
    bookStorage = new BookStorage(dataStorage);
  });

  describe("Test to return total price", () => {
    test("for id = 1", () => {
      expect(bookStorage.getTotalPrice(1)).toBe(70);
    });

    test("for id = 2", () => {
      expect(bookStorage.getTotalPrice(2)).toBe(190);
    });

    test("for id = 3", () => {
      expect(bookStorage.getTotalPrice(3)).toBe(30);
    });

    test("no book found", () => {
      expect(() => bookStorage.getTotalPrice()).toThrow(
        "nothing found with given id"
      );
    });
  });
});

describe("Testing method getPriceOfTheExtras", () => {
  let bookStorage;

  beforeEach(() => {
    bookStorage = new BookStorage(dataStorage);
  });

  test("for id = 1", () => {
    expect(bookStorage.getPriceOfTheExtras(1)).toBe(45);
  });

  test("for id=2", () => {
    expect(bookStorage.getPriceOfTheExtras(2)).toBe(145);
  });

  test("for id = 3", () => {
    expect(bookStorage.getPriceOfTheExtras(3)).toBe(0);
  });

  test("no book found", () => {
    expect(() => bookStorage.getPriceOfTheExtras()).toThrow(
      "nothing found with given id"
    );
  });
});
