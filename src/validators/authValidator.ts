import joi from "joi";
import Joi from "joi";
import {regexConstants} from "../regex/regex";

const authValidator = joi.object({
        email: Joi.string().regex(regexConstants.EMAIL),

        password: Joi.string().regex(regexConstants.PASSWORD)
    }
)

export {
    authValidator
}