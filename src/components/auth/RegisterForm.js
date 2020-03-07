import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/auth';
import LoginForm from './LoginForm';

class RegisterForm extends Component {
    renderField = ({ input, placeholder, type, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>

                <input {...input} type={type} placeholder={placeholder} />
                {touched && error && (
                    <span className='ui pointing red basic label'>{error}</span>
                )}
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
    onSubmit = formValues => {
        this.props.register(formValues);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <div className='ui-container'>
                <div className='ui segment'>
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className='ui form'
                    >
                        <Field className="field"
                            name='first_name'
                            type='text'
                            component={this.renderField}
                            placeholder='First Name'
                            validate={[required, minLength3]}
                        />
                        <Field className="field"
                            name='last_name'
                            type='text'
                            component={this.renderField}
                            placeholder='Last Name'
                            validate={[required, minLength3]}
                        />
                        <Field className="field"
                            name='username'
                            type='text'
                            component={this.renderField}
                            placeholder='Pseudo'
                            validate={[required, minLength3, maxLength15]}
                        />
                        <Field className="field"
                            name='email'
                            type='email'
                            component={this.renderField}
                            placeholder='E-mail'
                            validate={required}
                        />
                        <Field className="field" name="status" label='Statut :' component={this.renderSelectField}>

                            <option value="0" selected>Select Status</option>
                            <option value='11'>Student</option>
                            <option value='12'>Firm</option>
                            <option value='13'>Teacher</option>

                        </Field>

                        <Field className="field"
                            name='student_code'
                            type='text'
                            component={this.renderField}
                            placeholder='Student Code'
                            validate={[required, minLength3]}
                        />
                        <Field className="field"
                            name='password'
                            type='password'
                            component={this.renderField}
                            placeholder='New Password'
                            validate={required}
                        />
                        <Field className="field"
                            name='password2'
                            type='password'
                            component={this.renderField}
                            placeholder='Password verification'
                            validate={[required, passwordsMatch]}
                        />
                      
                        <button className='ui primary button'>REGISTER</button>
                    </form>
                    <p style={{ marginTop: '1rem' }}>
                        Already have an account ? <Link className="visibleLink" to='/login'>LOGIN</Link>
                    </p>
                </div>
            </div >
        );
    }
}

var StatusOptions = [(11, "Etudiant"), (12, "Professeur"), (13, "Entreprise")];
const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
    value && value.length < min
        ? `Saisissez ${min} lettres minimum`
        : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
    value && value.length > max ? `Saisissez ${max} lettres minimum` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'Les mots de passe sont différents' : undefined;

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
    mapStateToProps,
    { register }
)(RegisterForm);

export default reduxForm({
    form: 'registerForm'
})(RegisterForm);