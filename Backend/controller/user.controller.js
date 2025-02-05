import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Wait for the user to be found
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const hashedPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({ fullname: fullname, email:email, password:hashedPassword });

        // Save the user to the database
        await createdUser.save();

        res.status(201).json({ message: "User registered successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email
        } });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Wait for the user to be found
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ message: "Login successful", user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        } });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}