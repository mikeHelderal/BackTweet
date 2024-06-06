import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const signup = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        await modelUser.create({...req.body, password: hashedPassword});
        res.status(201).json("User has been created!");
        
    } catch (error) {
        console.log(error);
        res.status(500).json("Error creating user");
        
    }
}

const signIn = async (req, res, next) => {
    try {
        const user = await modelUser.findOne({email: req.body.email});
        const pswBdd = await  bcrypt.compare(req.body.password, user.password);
        const token = jwt.sign({id: user._id}, env.token, {expiresIn: "24h"});
        const {password, ...other} = user._doc;
        if(user !== null  && pswBdd ){
             //envoi le jeton (token) JWT sous forme de cookie HTTPOnly
            res.cookie("access_token", token, { httpOnly: true,  }).status(200).json(other);
                //res.status(200).json("connexion réussie");  
                res.end();                  
        }    
    } catch (error) {
        res.status(400).json("la connexion a échoué");
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await modelUser.findAll();
    res.status(200).json(users);
    } catch (error) {
        res.status(400).json("echec");

    }
    
}
const getOne = async (req, res, next) =>{
    try {
        const user = await modelUser.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json("echec");
    }
}
const updateUser = async (req, res, next) => {
    try {
        const result = await modelUser.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json("erreur lors de la modification")
    }
}
const deleteUser = async (req, res, next) => {}
