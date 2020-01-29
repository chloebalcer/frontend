import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Toggle from 'react-toggle'


var moment = require('moment');

class ChallengeForm extends Component {
    renderDatePicker = ({ input, label, placeholder, minDate, maxDate, meta: { touched, error } }) => {
        return (
            <div>
                <DatePicker

                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    selected={input.value || null}
                    onChange={input.onChange}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledKeyboardNavigation
                    placeholderText={placeholder}
                />
            </div>
        );
    };

    renderSelectField(field) {
        const className = `form-input ${field.meta.touched && field.meta.error ? 'has-error' : ''}`;
        return (
            <div className={className}>
                <label>{field.myLabel}</label>


                <select  {...field.input}  >
                    {field.children}
                </select>

                <div className="error">
                    {field.meta.touched ? field.meta.error : ''}
                </div>
            </div>
        )
    }
    renderField = ({
        input, label, meta: { touched, error }
    }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>
                <label>{label}</label>
                <input {...input} autoComplete='off' />
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
            </div>
        );
    };
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };


    render() {
        return (
            <div className='ui segment'>
                <form
                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='ui form error'
                >
                    <Field name='title' component={this.renderField} label='Titre :' />

                    <Field name='description' component={this.renderField} label='Résumé du Challenge :' />
                    <Field name="language" label='Language de Programmation :' component={this.renderSelectField}>
                        <option value="0" selected>Language de Programmation</option>
                        <option value="4">Python</option>
                        <option value="5">R</option>
                    </Field>
                    <Field name='starting_date' placeholder="YYYY-MM-DD" type='text' component={this.renderDatePicker} label='Disponible du : ' />
                    <Field name='ending_date' placeholder="YYYY-MM-DD" component={this.renderDatePicker} label='au :' />
                    <Field type="hidden" name="owner" component={this.renderField} />
                    <Field name="challenge_type" label='Type de Challenge :' component={this.renderSelectField}>

                        <option value="0" selected>Type de Challenge</option>
                        <option value='1'>Coding Game</option>
                        <option value='2'>Professional</option>
                        <option value='3'>Community</option>

                    </Field>
                    <Field name='allocated_time' component={this.renderField} label='Temps fourni :' />
                    <Field name='contact_mail' component={this.renderField} label='Adresse E-mail :' validate={required} />
                    <Field name='auto-correction' component={renderToggleInput} label='Activer la correction automatique ' />

                    <button className='ui primary button'>Soumettre</button>
                </form>
            </div >

        );
    }
}

const renderToggleInput = (field) => (
    <Toggle checked={field.input.value} onChange={field.input.onChange} icons={false} />
);



const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter at least 1 character';
    }

    return errors;
};

const required = value => (value ? undefined : 'Required');

export default reduxForm({
    form: 'challengeForm',
    touchOnBlur: false,
    validate
})(ChallengeForm);