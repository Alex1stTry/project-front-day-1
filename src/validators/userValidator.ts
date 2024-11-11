import joi from 'joi'
import Joi from 'joi'
import {regexConstants} from "../regex/regex";

const userValidator = joi.object({
    name: Joi.string().min(3).max(25),

    email: Joi.string().regex(regexConstants.EMAIL),

    password: Joi.string().regex(regexConstants.PASSWORD)
})

export {
    userValidator
}