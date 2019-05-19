import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../Ui/formFields'
import validate from '../../Ui/misc'
class Enroll extends Component {



    state = {
        formError: false,
        formSucess: '',
        formdate: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validator: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage: ''
            }
        }
    }
    updateForm(element) {
        const newFormData = { ...this.state.formdate }
        const newElement =  {...newFormData[element.id]} 

        newElement.value = element.event.target.value;
        let valiData = validate(newElement)
        console.log(valiData);
        newFormData[element.id] = newElement;
        this.setState({
            formdate: newFormData
        })
    }
    submitForm(e) {

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={(event) => { this.submitForm(event) }}>
                        <div className="enroll_title">
                            Enter your email
                       </div>
                        <div className="enroll_input">
                            <FormField
                                id={'email'}
                                formdata={this.state.formdate.email}
                                change={(element) => this.updateForm(element)}
                            />
                        </div>
                    </form>
                </div>

            </Fade>
        );
    }
}

export default Enroll;