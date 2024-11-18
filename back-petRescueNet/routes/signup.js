const { jsonResponse } = require("../lib/jsonResponse");
const User = require("../schema/user");

const router = require("express").Router();

router.post("/", async (req, res) => {
    const {name, lastname, username, password, email} =req.body;

    if(!!!name || !!!lastname || !!!username || !!!password || !!!email){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Los datos son requeridos",
            })
        );
    }
    //crear usuario en la base de datos
    //const user = new User({name, lastname, username, password, email});

    try {
        const user = new User();
        const exists = await user.emailExist(email);
    
        if(exists){
            return res.status(400).json(
                jsonResponse(400, {
                    error: "Correo ya existente"
                })
            );
        }
        const newUser = new User({ name, lastname, username, password, email});
    
        await newUser.save();
        res.status(200).json(jsonResponse(200, {message: "User created succesfully"}));
    
        res.send("signup");
    } catch (error) {
        res.status(500).json(
        jsonResponse(500, {
            error: "Error creating user"
        })
    )
    }
   
});

module.exports = router;