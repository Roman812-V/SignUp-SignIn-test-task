import bcrypt from "bcryptjs";
const data = {
    users: [
        {
            email: "test@gmail.com",
            password: bcrypt.hashSync("test")
        }
    ]
}

export default data;