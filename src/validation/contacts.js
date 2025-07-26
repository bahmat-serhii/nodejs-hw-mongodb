// src/validation/contacts.js

import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(6).max(20).required(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .required(),
  email: Joi.string().min(6).max(20),
  isFavourite: Joi.boolean().default(false),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(6).max(20),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal'),
  email: Joi.string().min(6).max(20),
  isFavourite: Joi.boolean().default(false),
});
