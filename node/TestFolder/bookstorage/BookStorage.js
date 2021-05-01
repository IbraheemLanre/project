"use strict";

module.exports = class BookStorage {
  constructor(jsonData) {
    if (jsonData) {
      this.storage = jsonData;
    } else {
      throw new Error("data storage missing");
    }
  }

  getById = (id) => {
    if (!id) {
      throw new Error("parameter missing");
    }
    for (let book of this.storage) {
      if (book.id === id) {
        return book;
      }
    }
    return null;
  };

  getAllIdsByName = (name) => {
    if (name) {
      let bookIds = [];
      for (let book of this.storage) {
        if (book.name.toLowerCase() === name.toLowerCase()) {
          bookIds.push(book.id);
        }
      }
      return bookIds;
    } else {
      return [];
    }
  };

  getAllBookAuthors = () => {
    const authors = [];
    for (let book of this.storage) {
      if (!authors.includes(book.author)) {
        authors.push(book.author);
      } else {
        return [];
      }
    }
    return authors;
  };

  getAllBooksByAuthor = (author) => {
    if (!author) {
      throw new Error("missing parameter");
    }
    const foundBooks = [];
    for (let book of this.storage) {
      if (book.author.toLowerCase() === author.toLowerCase()) {
        foundBooks.push(book);
      }
    }
    return foundBooks;
  };

  hasTopics = (id) => {
    if (id) {
      for (let book of this.storage) {
        if (book.id === id && book.topics) {
          return true;
        }
        return false;
      }
    }
    return false;
  };

  getBookTopics = (id) => {
    if (!id) {
      return [];
    }
    const foundTopics = [];
    for (let book of this.storage) {
      if (book.id === id && book.topics.length > 0) {
        foundTopics.push(...book.topics);
      }
    }
    return foundTopics;
  };

  // getBookTopics = (id) => {
  //   if (!id) {
  //     return [];
  //   }
  //   const foundTopics = [];
  //   for (let book of this.storage) {
  //     if (book.id === id) {
  //       for (let topic of book.topics) {
  //         if (topic) {
  //           foundTopics.push(topic);
  //         }
  //       }
  //     }
  //   }
  //   return foundTopics;
  // };

  getPriceWithoutExtras = (id) => {
    if (id) {
      for (let book of this.storage) {
        if (book.id === id && book.price) {
          return book.price;
        }
      }
    }
    throw new Error("nothing found with given id");
  };

  getTotalPrice = (id) => {
    if (id) {
      let totalPrice = 0;
      for (let book of this.storage) {
        if (book && book.id === id && book.price) {
          totalPrice += book.price;
          for (let extras of book.extras) {
            if (extras) {
              totalPrice += extras.price;
            }
          }
        }
      }
      return totalPrice;
    }
    throw new Error("nothing found with given id");
  };

  getPriceOfTheExtras = (id) => {
    if (id) {
      let totalPriceExtras = 0;
      for (let book of this.storage) {
        if (book && book.id === id) {
          for (let extras of book.extras) {
            if (extras) {
              totalPriceExtras += extras.price;
            } else {
              totalPriceExtras = totalPriceExtras;
            }
          }
        }
      }
      return totalPriceExtras;
    }
    throw new Error("nothing found with given id");
  };
};
