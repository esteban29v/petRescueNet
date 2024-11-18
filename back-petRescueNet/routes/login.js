
const { jsonResponse } = require("../lib/jsonResponse");
const User = require("../schema/user");
const getUserInfo = require("../lib/getUserInfo");
const router = require("express").Router();

router.post("/", async (req, res) => {
    const {email, password} =req.body;

    if(!!!email || !!!password){
        return res.status(400).json(
            jsonResponse(400, {
                error: "Los datos son requeridos",
            })
        );
    }

    const user = await User.findOne({ email});
    if(user){
        const correctPassword = await user.comparePassword(password, user.password);

        if(correctPassword){
            //Autenticar usuario
            const accessToken = user.createAccessToken();
            const refreshToken = await user.createRefreshToken();
            // console.log({ accessToken, refreshToken });
            res.status(200).json(jsonResponse(200, {user: getUserInfo(user), accessToken, refreshToken}));
        }else{
            res.status(400).json(
                jsonResponse(400,{
                    error: "Correo o contraseña incorrectos"
                })
            );
        }
    }else{
        res.status(400).json(
            jsonResponse(400, {
                error: "Usuario no encontrado"
            })
        );
    }

    
});

module.exports = router;