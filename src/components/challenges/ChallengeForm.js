import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Toggle from 'react-toggle'
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "../../css/challenges.css";
import TimePicker from 'react-time-picker';
import DateTime from 'react-datetime';
import 'rc-time-picker/assets/index.css';


class ChallengeForm extends Component {
    renderDatePicker = ({ input, label, placeholder, minDate, maxDate, meta: { touched, error } }) => {
        const date = new Date(input.value);
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();
        const formattedDate = `${year}-${month}-${day}`;
        return (
            <div>
                <input
                    type="date"
                    disableClock={true}
                    className="form-control"
                    format="yyyy-MM-dd"
                    selected={year - month - day}
                    onChange={input.onChange || null}
                    minDate={minDate}
                    maxDate={maxDate}
                    disabledKeyboardNavigation
                    placeholderText={placeholder}
                />
            </div>
        );
    };

    convertDate = (input) => {
        const selectedDate = new Date(moment.utc(input));
        const formattedDate = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
        return (
            formattedDate
        );
    }
    renderTimePicker = ({ input, label, placeholder, meta: { touched, error } }) => {
        const time = moment(input.value).format('HH:mm:ss');
        return (
            <div>
                <label>{label}</label>
                <TimePicker
                    defaultValue={moment()} showSecond={false}
                    disableClock={true}
                    calendarIcon={null}
                    clearIcon={null}
                    date={false}
                    timeFormat="HH:mm:ss"
                    disableCalendar={true}
                    format="HH:mm:ss"
                    hourPlaceholder="00"
                    minutePlaceholder="00"
                    secondPlaceholder="00"
                    maxDetail="second"
                    selected={moment(input.value).format('HH:mm:ss') || null}
                    onChange={input.onChange}
                    placeholderText={placeholder}

                />

            </div>

        );
    };

    renderToggleInput(field) {
        return (
            <Toggle checked={field.input.value} onChange={field.input.onChange} icons={false} />
        );
    }

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
                    <Field dateFormat="yyyy-MM-dd" name='starting_date' placeholder="YYYY-MM-DD" type='text' component={this.renderDatePicker} label='Disponible du : ' />
                    <Field name='ending_date' placeholder="YYYY-MM-DD" component={this.renderDatePicker} label='au :' />
                    <Field name="challenge_type" label='Type de Challenge :' component={this.renderSelectField}>

                        <option value="1" selected>Type de Challenge</option>
                        <option value="1">Coding Game</option>
                        <option value='2'>Professional</option>
                        <option value='3'>Community</option>

                    </Field>
                    <Field name='allocated_time' timeFormat="HH:mm:ss" placeholder="HH:mm:ss" type='text' component={this.renderTimePicker} label='Temps fourni :' />
                    <Field name='contact_mail' component={this.renderField} label='Adresse E-mail :' validate={required} />
                    <Field name='auto_correction' component={this.renderToggleInput} label='Activer la correction automatique ' />

                    <button className='ui primary button'>Soumettre</button>
                </form>
            </div >

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

const required = value => (value ? undefined : 'Required');

export default reduxForm({
    form: 'challengeForm',
    touchOnBlur: true,
    validate
})(ChallengeForm);