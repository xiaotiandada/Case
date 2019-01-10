{
  const obj1 = {
    name: 'bobo'
  }
  const obj2 = {
    age: 11
  }
  const merged = { ...obj1,
    ...obj2
  }
  // console.log(merged)
}

{
  const pureAssoc = ((key, value, object) => ({
    ...object,
    [key]: value
  }))

  const person = {
    name: 'xiao'
  }

  const result = pureAssoc('lei', 400, person)
  // console.log({
  //   person,
  //   result
  // })
}

{
  const getFirstName = (user) => user.firstName;
  const uppercaseString = (string) => string.toUpperCase();
  const reverseString = (string) => string
    .split('')
    .reverse()
    .join('');

  const upperAndReverseFirstName = (user) => {
    const name = getFirstName(user);
    const uppercasedName = uppercaseString(name);

    return reverseString(uppercasedName);
  };

  const result = upperAndReverseFirstName({
    firstName: 'Bobo'
  });

  // console.log({
  //   result
  // });
}