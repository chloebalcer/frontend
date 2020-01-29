import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChallenges } from '../../actions/challenges';
import DateTime from 'react-datetime'
import classNames from 'classnames'

class ChallengeList extends Component {
    componentDidMount() {
        this.props.getChallenges();
    }

    render() {
        return (
            <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
                {this.props.challenges.map(challenge => (
                    <div className='item' key={challenge.id}>
                        <i className='large calendar outline middle aligned icon' />
                        <div className='content'>
                            <a className='header'>{challenge.title}</a>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
const DateTimeField = ({ tooltip, tooltipPlacement, disabled, input, label, placeholder, meta: { valid, touched, error }, ...props }) => {
    const classes = classNames('form-group', {
        'has-error': (touched && !valid),
        'has-success': (touched && valid)
    })
    console.log(input.value)

    return (<div className={classes}>
        {label &&
            <label htmlFor={input.name}>{label}</label>
        }
        <DateTime
            name={input.name}
            //value={input.value}
            locale='en'
            dateFormat='MM/DD/YYYY'
            timeFormat='hh:mm A'
            onChange={param => {
                console.log(param)
                input.onChange(param)
            }}
            disabled={disabled}
        />
        {(!valid && touched) &&
            <p className='help-block'>{error}</p>
        }
    </div>)
}
const mapStateToProps = state => ({
    challenges: Object.values(state.challenges)
});

// function that connects this component to the store
export default connect(
    mapStateToProps,
    { getChallenges }
)(ChallengeList);