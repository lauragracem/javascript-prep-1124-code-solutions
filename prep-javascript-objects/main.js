const person = {
  firstName: 'Emma',
  lastName: 'Dela Cruz',
  hobby: 'eating shoes',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's name is:", fullName);

person.job = 'Security Guard';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Part time Professional Napper';
console.log("The person's previous job was:", person['previousJob']);

console.log('The complete person object:', person);
