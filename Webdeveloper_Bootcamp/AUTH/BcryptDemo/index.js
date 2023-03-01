const bcrypt = require('bcrypt');

// const hashPassword = async (pw) => {
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(pw, salt);
//     console.log(salt);
//     console.log(hash);
// }

const hashPassword = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPW) => {
    const result = await bcrypt.compare(pw, hashedPW);
    if (result) {
        console.log("Logged In");
    } else {
        console.log("Incorrect password");
    }
}

// hashPassword('monkey');

login('monkey', '$2b$12$C29vzmB2gsnLy7YGka2p7.ph3Af1SiCe.126i6ziXoIMb3YrnoodG');
