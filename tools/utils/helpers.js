import { nouns, verbs } from "./words";

/* Strings */

export function camelizeItems(items, separator = '') {
  if (! (items instanceof Array)) {
    return items;
  }

  return [items[0]].concat(
      items.slice(1).map(item => item.charAt(0).toUpperCase() + item.slice(1))
    ).join(separator);
}

export function pascalizeItems(items, separator = '') {
  if (! (items instanceof Array)) {
    return items.charAt(0).toUpperCase() + items.slice(1)
  }

  return items.map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(separator);
}

/* Random */

export function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomNoun() {
  return getRandomItem(nouns);
}

export function getRandomVerb() {
  return getRandomItem(verbs);
}
