import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DropdownSelect extends Component {
    renderSelectOptions(choice){
        return (
            <option key={choice} value={choice}>{choice}</option>
        )
    }

    render() {
        const { input, label } = this.props;
        console.log(this.props.choices);
        return (            
            <div className="form-group">
                {/* <label>
                    {dropdown.label}
                </label> */}
                <select className="form-control" {...input}> 
                    <option value="">Select</option>
                    {this.props.choices.map(this.renderSelectOptions)}
                </select>
            </div>
        );
    }
}

DropdownSelect.propTypes = {
    choices: PropTypes.array,
    input: PropTypes.object,
    label: PropTypes.string,
};

export default DropdownSelect;