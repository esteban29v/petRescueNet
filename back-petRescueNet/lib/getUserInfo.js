function getUserInfo(user){
    return {    
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        id: user.id || user._id,
    };
}

module.exports = getUserInfo;