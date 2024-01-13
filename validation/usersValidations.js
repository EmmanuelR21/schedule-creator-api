const signUpValidation = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.body)
        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message
            })
        }

        next()
    }
}

const loginValidation = (schema) => {
    return (req, res, next) => {
        const result = schema.validate(req.params)
        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message
            })
        }

        next()
    }
}

module.exports = {
    signUpValidation,
    loginValidation
}
