import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas/BookOrderFormSchema'

function BookOrderForm({ formSubmit }) {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            tel: '1125968540',
            email: 'ejemplo@email.com',
            address: '',
            confirmAddress: ''
        },
        validationSchema: basicSchema,
        onSubmit: (evt) => {
            formSubmit(evt);
        }
    });


    return (
        <form id="orderForm" onSubmit={formik.handleSubmit}>
            <div className='row'>
                <div className='col'>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label inputLabel'>Name</label>
                        <input type="text"
                            id="name"
                            className={`form-control ${formik.errors.name ? 'is-invalid': ''}`}
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange} />
                        {formik.errors.name && formik.touched.name && <small className='inputErrorMes'>{formik.errors.name}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="surname" className='form-label inputLabel'>Surname</label>
                        <input type="text"
                            id="surname"
                            className={`form-control ${formik.errors.surname ? 'is-invalid' : ''}`}
                            name="surname"
                            value={formik.values.surname}
                            onChange={formik.handleChange} />
                        {formik.errors.surname && formik.touched.surname && <small className='inputErrorMes'>{formik.errors.surname}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="tel" className='form-label inputLabel'>Tel</label>
                        <input type="tel"
                            id="tel"
                            className={`form-control ${formik.errors.tel ? 'is-invalid': ''}`}
                            name="tel"
                            value={formik.values.tel}
                            onChange={formik.handleChange} />
                        {formik.errors.tel && formik.touched.tel && <small className='inputErrorMes'>{formik.errors.tel}</small>}
                    </div>
                </div>
                <div className='col'>
                    <div className='mb-3'>
                        <label htmlFor="email" className='form-label inputLabel'>Email</label>
                        <input type="email"
                            id="email"
                            className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange} />
                        {formik.errors.email && formik.touched.email && <small className='inputErrorMes'>{formik.errors.email}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="address" className='form-label inputLabel'>Address</label>
                        <input type="text"
                            id="address"
                            className={`form-control ${formik.errors.address ? 'is-invalid' : ''}`}
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange} />
                        {formik.errors.address && formik.touched.address && <small className='inputErrorMes'>{formik.errors.address}</small>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="confirmAddress" className='form-label inputLabel'>Confirm Address</label>
                        <input type="text"
                            id="confirmAddress"
                            className={`form-control ${formik.errors.confirmAddress ? 'is-invalid' : ''}`}
                            name="confirmAddress"
                            value={formik.values.confirmAddress}
                            onChange={formik.handleChange} />
                        {formik.errors.confirmAddress && formik.touched.confirmAddress && <small className='inputErrorMes'>{formik.errors.confirmAddress}</small>}
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default BookOrderForm