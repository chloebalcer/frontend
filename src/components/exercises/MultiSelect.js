import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';

const cars = [
    { label: "audi", value: 1 },
    { label: "bmw", value: 2 },
    { label: "ford", value: 3 },
    { label: "VW", value: 4 },
];

export default class CreatableMulti extends Component {
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
    render() {
        const { selectedOption } = this.state;
        return (
            <CreatableSelect
                options={cars}
                isMulti
                value={selectedOption}
                onChange={this.handleChange}
                isValidNewOption={this.handleIsValidNewOption}
                autoFocus={true}
            />
        );
    }
}