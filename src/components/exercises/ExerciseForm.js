import React, { Component, ReactPropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Toggle from 'react-toggle'
import moment from 'moment';
import TimePicker from 'react-time-picker';
import 'rc-time-picker/assets/index.css';
import Select, { components } from "react-select";
import ReactResponsiveSelect from 'react-responsive-select';
import { Multiselect } from 'react-widgets'
import CreatableMulti from './MultiSelect';
import CreatableSelect from 'react-select/creatable';

const mots_clefs = [
    { text: 'Pricer', id: 1 },
    { text: 'Equity', id: 2 },
    { text: 'Commidities', id: 3 },
    { text: 'Forex', id: 4 }
];

const cars = [
    { label: "audi", value: 1 },
    { label: "bmw", value: 2 },
    { label: "ford", value: 3 },
    { label: "VW", value: 4 },
];
const noop = () => { };
class ExerciseForm extends Component {


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


    // A Modifier -> quitte a supprimer et a utiliser le script MultiSelect.js
    renderMultiselect = ({ input, data, valueField, textField }) => {
        const { atTop, multi, multiValue, options, value } = this.state;
        return (
            <Select.Creatable
                multi={multi}
                options={options}
                onChange={this.handleOnChange}
                value={multi ? multiValue : value}
                showNewOptionAtTop={atTop}
            />
        );
    };


    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
            { selectedOption },
            () => console.log(`Option selected:`, selectedOption)
        );
    };
    handleIsValidNewOption = (inputValue, selectValue, selectOptions) => {
        console.log(inputValue, selectOptions);
        // Check for the same value --> ASD === ASD ?
        const exactValueExists = selectOptions.find(el => el.value === inputValue);
        // Check if the value has a valid length.
        // Without this, it will show create option for empty values.
        const valueIsNotEmpty = inputValue.trim().length;
        // If true show create option.
        return !exactValueExists && valueIsNotEmpty;
    };
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    handleImageChange = (e) => {
        this.setState({
            image: e.target.files[0]
        })
    };


    // Modifier la gestion des fichiers
    render() {
        return (
            <div className='ui segment'>
                <form

                    onSubmit={this.props.handleSubmit(this.onSubmit)}
                    className='ui form error'
                >
                    <Field name='title' component={this.renderField} label="Titre de l'Exercice : " validate={required} />

                    <Field name='description' component={this.renderField} label="Indiquez l'énoncé de l'exercice : " />
                    <Field name="level" label="Indiquez le niveau de l'exercice " component={this.renderSelectField}>
                        <option value={1} selected>Niveau de l'exercice</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Field>
                    <Field name='key_words' component={CreatableMulti} label="Indiquez les mots-clés correspondant à l'exercice :" />
                    <input name="file" type="file"
                        id="file"
                        accept="file/pdf, file/ltx" onChange={this.handleImageChange} validatefile={required} />

                    <input type="submit" />

                    <button className='ui primary button'>Créer Exercice</button>

                </form>
                <form action="/ExerciseList">
                    <input type="submit" value="Créer un compte" />
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

// A modifier
const validatefile = formValues => {
    const errors = {};

    if (!formValues.file) {
        errors.file = 'Wrong file format passed. Please load a latex or pdf file.';
    }
    else {
        errors.file = "Le fichier a été téléchargé avec succés"
    }
    return errors;
};

const required = value => (value ? undefined : 'Required');

export default reduxForm({
    form: 'exerciseForm',
    touchOnBlur: true,
    validate,
    validatefile
})(ExerciseForm);