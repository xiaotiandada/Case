// (async () => {
//   console.log('1')
//   await new Promise((reslove) => {
//     return setTimeout(function afterTwoSeconds() {
//       console.log('2')
//       reslove()
//     }, 2000)
//   })
//   console.log('3')
// })()

{
  let url = "https://api.github.com/users/daspinola/repos";
  const request = url => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(e);
        } else {
          console.log("false");
        }
      }
    };
    xhr.ontimeout = () => {
      console.log("超时");
    };
    xhr.open("get", url, true);
    xhr.send();
  };

  // request(url);
}

{
  let url = "https://api.github.com/users/daspinola/repos";
  const request = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onreadystatechange = e => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          callback(null, xhr.response);
        } else {
          callback(xhr.status, null);
        }
      }
    };
    xhr.ontimeout = () => {
      console.log("超时");
    };
    xhr.open("get", url, true);
    xhr.send();
  };

  const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;
  function handleUsersList(error, users) {
    if (error) throw error;
    const list = JSON.parse(users).items;
    list.forEach(function(user) {
      request(user.repos_url, handleReposList);
    });
  }

  function handleReposList(err, repos) {
    if (err) throw err;
    console.log(repos);
    // Handle the repositories list here
  }
  try {
    // request(userGet, handleUsersList);
  } catch (error) {
    console.error("Request boom! ", error);
  }
}

{
  // const myPromise = new Promise((resolve, reject) => {
  //   if (codeIsFine) {
  //     resolve("fine");
  //   } else {
  //     reject("error");
  //   }
  // });
  // myPromise
  //   .then(response => {
  //     console.log(response);
  //     return response;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

{
  function request(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.timeout = 2000;
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.ontimeout = function() {
        reject("timeout");
      };
      xhr.open("get", url, true);
      xhr.send();
    });
  }

  // const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;
  // const myPromise = request(userGet);
  // console.log("will be pending when logged", myPromise);
  // myPromise
  //   .then(function handleUsersList(users) {
  //     console.log(
  //       "when resolve is found it comes here with the response, in this case users ",
  //       users
  //     );
  //     const list = JSON.parse(users).items;
  //     return Promise.all(
  //       list.map(function(user) {
  //         return request(user.repos_url);
  //       })
  //     );
  //   })
  //   .then(function handleReposList(repos) {
  //     console.log("All users repos in an array", repos);
  //   })
  //   .catch(function handleErrors(error) {
  //     console.log(
  //       "when a reject is executed it will come here ignoring the then statement ",
  //       error
  //     );
  //   });

  // const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;
  // const userRequest = request(userGet);
  // // Just by reading this part out loud you have a good idea of what the code does
  // userRequest
  //   .then(handleUsersList)
  //   .then(repoRequest)
  //   .then(handleReposList)
  //   .catch(handleErrors);
  // function handleUsersList(users) {
  //   return JSON.parse(users).items;
  // }
  // function repoRequest(users) {
  //   return Promise.all(
  //     users.map(function(user) {
  //       return request(user.repos_url);
  //     })
  //   );
  // }
  // function handleReposList(repos) {
  //   console.log("All users repos in an array", repos);
  // }
  // function handleErrors(error) {
  //   console.error("Something went wrong ", error);
  // }
}
{
  // function* foo() {
  //   yield 1;
  //   const args = yield 2;
  //   console.log(args);
  // }
  // var fooIterator = foo();
  // console.log(fooIterator.next().value);
  // console.log(fooIterator.next().value);
  // fooIterator.next("aParam");
}

{
  function request(url) {
    return function(callback) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            callback(null, xhr.response);
          } else {
            callback(xhr.status, null);
          }
        }
      };
      xhr.ontimeout = function() {
        console.log("timeout");
      };
      xhr.open("get", url, true);
      xhr.send();
    };
  }

  function* list() {
    const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;

    const users = yield request(userGet);

    yield;

    for (let i = 0; i <= users.length; i++) {
      yield request(users[i].repos_url);
    }
  }

  // try {
  //   const iterator = list();
  //   iterator.next().value(function handleUsersList(err, users) {
  //     if (err) throw err;
  //     const list = JSON.parse(users).items;

  //     // send the list of users for the iterator
  //     iterator.next(list);

  //     list.forEach(function(user) {
  //       iterator.next().value(function userRepos(error, repos) {
  //         if (error) throw repos;
  //         // Handle each individual user repo here
  //         console.log(user, JSON.parse(repos));
  //       });
  //     });
  //   });
  // } catch (e) {
  //   console.error(e);
  // }
}

{
  // sumTwentyAfterTwoSeconds(10).then(result =>
  //   console.log("after 2 seconds", result)
  // );
  // async function sumTwentyAfterTwoSeconds(value) {
  //   const remainder = afterTwoSeconds(20);
  //   return value + (await remainder);
  // }
  // function afterTwoSeconds(value) {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve(value);
  //     }, 2000);
  //   });
  // }
}

{
  function request(url) {
    return new Promise(function(resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.response);
          } else {
            reject(xhr.status);
          }
        }
      };
      xhr.ontimeout = function() {
        reject("timeout");
      };
      xhr.open("get", url, true);
      xhr.send();
    });
  }

  async function list() {
    const userGet = `https://api.github.com/search/users?page=1&q=daspinola&type=Users`;

    const users = await request(userGet);
    const usersList = JSON.parse(users).items;

    usersList.forEach(async function(user) {
      const repos = await request(user.repos_url);

      handleRepoList(user, repos);
    });
  }
  function handleRepoList(user, repos) {
    const userRepos = JSON.parse(repos);

    // Handle each individual user repo here
    console.log(user, userRepos);
  }

  list().catch(e => console.error(e));
}
