"use strict";

const fs = require("fs").promises;

async function readFromStorage(storageFile) {
  try {
    const data = await fs.readFile(storageFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeToStorage(storageFile, data) {
  try {
    await fs.writeFile(storageFile, JSON.stringify(data, null, 4), {
      encoding: "utf-8",
      flag: "w",
    });
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = { readFromStorage, writeToStorage };
