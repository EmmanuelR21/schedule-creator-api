const Joi = require("joi")

const signUpSchema = Joi.object({
    username: Joi.string().min(8).max(16).required().messages({
        "string.min": "Username must be atleast 8 characters!",
        "string.max": "Username must be less than 16 characters!",
        "string.empty": "Username is required!"
    }),
    password: Joi.string().min(10).max(30).required().messages({
        "string.min": "Password must be atleast 10 characters!",
        "string.max": "Password must be less than 30 characters!",
        "string.empty": "Password is required!"
    }),
    confirmPassword: Joi.valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords must match!"
    })
})

const loginSchema = Joi.object({
    username: Joi.string().min(8).messages({
        "string.min": "Please provide a valid Username",
    }),
    password: Joi.string().min(10).messages({
        "string.min": "Please provide a valid password"
    })
})
module.exports = {
    signUpSchema,
    loginSchema
}
