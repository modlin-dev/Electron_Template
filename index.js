/**
 * @param {Object} data
 * @param {String} data.name
 * @param {Array.<String>} data.email
 * @param {Number} data.password
 * @returns
 */
function addUser(data) {
  if (data.name === undefined) return;
  if (data.email === undefined) return;
  if (data.password === undefined) return;

  return {
    name: String(data.name),
    email: String(data.email),
    password: Number(data.password),
  };
}

console.log(
  addUser({
    name: "John",
    email: ["john@example.com"],
    password: 911,
  }),
  import.meta.dir
);
