import * as yup from "yup";

// without this line 5 throw warnings
// eslint-disable-next-line   
const telRules = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const basicSchema = yup.object().shape({
    name:yup
        .string()
        .max(10, 'must not be longer than 10')
        .min(3, 'must be at least 3 characters long')
        .required('Required'),
    surname:yup
        .string()
        .max(10, 'must not be longer than 10')
        .min(3, 'must be at least 3 characters long')
        .required('Required'),
    tel:yup
        .string()
        .matches(telRules, { message: 'write a valid tel number' })
        .required('Required'),
    email:yup
        .string()
        .email('Please enter a valid email')
        .required('Required'),
    address:yup
        .string()
        .required('Required'),
    confirmAddress:yup
        .string()
        .oneOf([yup.ref('address'), null], 'address not match')
        .required('Required'),
});

