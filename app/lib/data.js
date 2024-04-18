import User from "../models/user";

export const addUser = async (data) => {
    "use server"
    const { name, email, password, phone, address } = Object.fromEntries(data);
  
    try{
        const user = new User({
            name,
            email,
            password,
            phone,
            address
          });
        await user.save();
        console.log("User added successfully!");
    } catch(error){
        console.log("User add error", error);
    }
}