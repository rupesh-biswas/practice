import axios from "axios";
import _ from "lodash";


interface User {
  id: number;
  name: number;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     console.log("Wooo");
//     const { data } = res;
//     printUser(data);
//   })
//   .catch((e) => {
//     console.log("Error: ", e);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const { data } = res;
    data.forEach(printUser);
  })
  .catch((e) => {
    console.log("Error: ", e);
  });

function printUser(user: User): void {
  console.log(user.name);
  //   console.log(user.email);
  //   console.log(user.phone);
  //   console.log(user.company.catchPhrase);
}
