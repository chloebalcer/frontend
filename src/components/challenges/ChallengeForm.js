import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';


class ChallengeForm extends Component {
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
                    <Field name="language" label='Language de Programmation :' component={this.renderField}>
                        <option />
                        <option value="4">Python</option>
                        <option value="5">R</option>
                    </Field>
                    <Field name='starting_date' component={this.renderField} label='Disponible du : ' />
                    <Field name='ending_date' component={this.renderField} label='au :' />
                    <p>Type de Challenge :</p>
                    <select

                        name='challenge_type'
                        component={this.renderChoice}
                        label='Type de Challenge :'

                    >
                        <option value="1">Coding Game</option>
                        <option value="2">Professional</option>
                        <option value="3">Community</option>
                    </select>
                    <Field name='allocated_time' component={this.renderField} label='Temps fourni :' />
                    <Field name='contact_mail' component={this.renderField} label='Adresse E-mail :' />
                    <Field name='auto-correction' component={this.renderField} label='Activer la correction automatique ' />

                    <button className='ui primary button'>Soumettre</button>
                </form>
            </div>

        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter at least 1 character';
    }

    return errors;
};

export default reduxForm({
    form: 'challengeForm',
    touchOnBlur: false,
    validate
})(ChallengeForm);