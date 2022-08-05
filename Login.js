class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }
}

const Users = [];

$(() => {
    $("button:submit").click(() => {
       //$("input#user-btn").toggle();
       let usernameInput = $(".container form[method='post'] input#username");
       let passwordInput = $(".container form[method='post'] input#password");
       let username = usernameInput.val().trim();
       let password = passwordInput.val().trim();

       if(!username.length || !password.length) return;
       usernameInput.val('');
       passwordInput.val('');
       if(Users.length === 0 || (typeof Users.find(i => i.username === username) === 'undefined')) {
        Users.push(new User(username, password));
        console.log(Users);
        return alert(`Registered ${username}`);
       }
       if(password !== Users.find(i => i.username === username).getPassword()) return alert("Password incorrect!");
       alert(`Welcome ${username}`);
    });
});