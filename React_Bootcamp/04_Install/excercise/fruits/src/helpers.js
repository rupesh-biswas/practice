import fruits from "./foods";

function choice(items) {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}

function remove(items, item) {
    const newItems = items.filter(i => i !== item);
    return newItems;
}

export { choice, remove };