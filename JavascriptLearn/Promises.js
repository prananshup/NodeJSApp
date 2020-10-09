
const p = new Promise((resolve, reject) => {
	resolve(1);
  reject(new Error('err message'))
});

p.then(i => console.log(i))
.catch(e => console.log(e.message));

//Output: 1

//////////////////////////////////////
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                console.log('User is returned...');
                resolve({id:1 , name: 'user1'});
            } else {
                reject(new Error('user not found...'));
            }
            
        }, 2000);
    });
}

function getUserRepos(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === 'user1') {
                console.log('user has repos...');
                resolve(['repo1', 'repo2']);
            } else {
                reject(new Error('user dont have any repos...'));
            }
            
        }, 2000);
    });
}

getUser(1).then(u => console.log('user >>>', u))
.catch(e => console.log(e.message));
// Output: "User is returned..."
// 'user:', {
//     id: 1,
//     name: "user1"
//   }

getUser(2).then(u => console.log('user >>>', u))
.catch(e => console.log(e.message));
// Output: "User not found..."

getUser(1).then(u => getUserRepos(u.name))
.then(r => console.log('Repos: ', r))
.catch(e => console.log(e.message));

// Output : "User is returned..."
// "user has repos..."
// "Repos: ", ["repo1", "repo2"]

// Promises can also be executed parallel (Promise.all()/Promise.race())
// Same thing can be achieved with async/await  instead of then()/catch()

async function displayUserRepos() {
    const user = await getUser(1);
    const repos = await getUserRepos(user.name);
    console.log('User Repos:', repos);
}

displayUserRepos();

// Output : "User is returned..."
// "user has repos..."
// "Repos: ", ["repo1", "repo2"]