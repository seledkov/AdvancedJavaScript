const ids = new Set(['hi', 'from', 'set']); // it maybe used to unique data, maybe IDs

ids.add(2);
if (ids.has('hi')) {
  ids.delete('set');
}

console.log('ids set', ids);
for (const entry of ids.entries()) {
  console.log('ids entry', entry);
}

const person1 = { name: 'Max' }; // if i need add data to user, but no need mutate obj
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ age: 30, date: 'may' }]]]);

personData.set(person2, 'developer');
personData.set(person2, 200);
console.log('get person1 from map ', personData.get(person2));

console.log('personData map', personData);
for (const entry of personData.entries()) {
  console.log('personData entry', entry);
}

let weakPerson1 = { name: 'user1', age: 110 };
let weakPerson2 = { name: 'user2', age: 120 };
let weakPerson3 = { name: 'user3', age: 100 };
let weakPersonData = [weakPerson1, weakPerson2];
const persons = new WeakSet(weakPersonData); // store only objects(any obj as arr, foo,set)
persons.add(weakPerson3);

weakPersonData.length = 0; // weakPerson1 does not used in arr
// weakPersonData = [];
weakPerson1 = null;

console.log(persons);
console.log(persons.has(weakPerson1)); // false, garbage collector clear weakPerson1
// weak map ~= weak set, used if need clear memory into big apps
