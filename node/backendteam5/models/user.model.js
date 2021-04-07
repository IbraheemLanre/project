const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {type: String, required:[true, "Missing field"]},
    firstname:{type: String, required:[true, "Missing field"]},
    lastname: {type: String, required:[true, "Missing field"]},
    email:{type:String, required:[true, "Missing field"]},
    password:{type: String, required:[true, "Missing field"]},
    role: [{type: mongoose.Schema.Types.ObjectId, ref:"Role"}]

})

export const User = mongoose.model("User", UserSchema)

