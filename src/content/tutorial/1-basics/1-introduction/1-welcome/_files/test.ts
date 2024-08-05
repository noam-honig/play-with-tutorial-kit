type Person = {
  firstName: string;
  lastName: string;
};

export function test() {
  var p: Person = {
    // try typing firstName / lastName - I don't get any typing errors
  };

  alert(p.firstName + " " + p.lastName);
}
