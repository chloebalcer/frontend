import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
    renderField = ({ input, placeholder, type, meta: { touched, error } }) => {
        return (
            <div className={`field ${touched && error ? 'error' : ''}`}>

                <input {...input} type={type} placeholder={placeholder} />
                {touched && error && (
                    <span col='red'>{error}</span>
                )}
            </div>
        );
    };

    hiddenField = ({ type, meta: { error } }) => {
        return (
            <div className='field'>
                <input type={type} />
                {error && <div col='red'>{error}</div>}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.login(formValues);
    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
        }
        return (
            <div className='ui container'>
                <div className='ui segment'>
                    <form
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className='ui form'
                    >
                        <Field
                            name='username'
                            type='text'
                            component={this.renderField}
                            placeholder='Adresse mail ou Pseudo'
                        />
                        <Field
                            name='password'
                            type='password'
                            component={this.renderField}
                            placeholder='Mot de Passe'
                        />
                        <Field
                            name='non_field_errors'
                            type='hidden'
                            component={this.hiddenField}
                        />
                        <button type="primary">CONNECTION</button>
                    </form>

                    Ou <form action="/register">
                        <input type="submit" value="Créer un compte" />
                    </form>

                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
    mapStateToProps,
    { login }
)(LoginForm);

export default reduxForm({
    form: 'loginForm'
})(LoginForm);

