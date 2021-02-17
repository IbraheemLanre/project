"use strict";

const DataStorage = require("./datastoragelayer");
const db = new DataStorage();

const menuText = `
Choose:
1. Get All
2. Get One
3. Insert
4. Update
5. Remove
6. Exit

Your choice(1,2,3,4,5 or 6)
`;

menu();

async function menu() {
  let exited = false;

  do {
    const selectedOption = await prompt(menuText);
    switch (selectedOption) {
      case "1":
        try {
          const result = await db.getAll();
          for (let book of result) {
            printBook(book);
          }
          console.log(result);
        } catch (err) {
          console.log(err);
        }
        break;
      case "2":
        const id = await prompt("Input book id: ");
        try {
          const result = await db.get(+id);
          if (result.status) {
            console.log(result.status);
          } else {
            printBook(result);
          }
        } catch (err) {
          console.log(err);
        }
        break;
      case "3":
        try {
          const result = await db.insert(await readBookData());
          console.log(result.status);
        } catch (err) {
          console.log(err);
        }
        break;
      case "4":
        try {
          const result = await db.update(await readBookData());
          console.log(result.status);
        } catch (err) {
          console.log(err);
        }
        break;
      case "5":
        try {
          const id = await prompt("Input bookId: ");
          const result = await db.remove(+id);
          console.log(result.status);
        } catch (err) {
          console.log(err);
        }
        break;
      case "6":
        exited = true;
        break;
      default:
        console.log("Only 1,2,3,4,5 or 6 are valid options");
    }
  } while (!exited);
}

function prompt(promptText) {
  process.stdout.write(promptText);
  return new Promise((resolve) => {
    const input = process.stdin;
    input.resume();
    input.once("data", (data) => {
      input.pause();
      resolve(data.toString().trim());
    });
  });
}

function printBook(book) {
  let message =
    `${book.bookId}: ${book.name} ` +
    `is a ${book.type} ` +
    `written by ${book.author}` +
    ` and published in the year ${book.year}.`;

  console.log(message);
}

async function readBookData() {
  const bookId = +(await prompt("Input bookId: "));
  const name = await prompt("Input name: ");
  const author = await prompt("Input author: ");
  const type = await prompt("Input type: ");
  const year = +(await prompt("Input year: "));

  return {
    bookId,
    name,
    author,
    type,
    year,
  };
}
