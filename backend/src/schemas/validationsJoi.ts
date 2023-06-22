import Joi from 'joi';

const regex = /^[^0-9].*$/;

const schema = Joi.object({
  name: Joi.string().required().pattern(regex).min(3),
});

export default schema;