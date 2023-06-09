"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userValidate = (req, res, next) => {
    const { name } = req.body;
    if (!name)
        return res.status(400).json({ message: 'User is required' });
    if (name.match(/^[0-9]/))
        return res.status(422).json({ message: 'User needs to be a text' });
    if (name.length < 3)
        return res.status(422).json({ message: 'Name should have at least 3 characters' });
    return next();
};
exports.default = userValidate;
