import { reduxForm, Field } from "redux-form";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const textBox = ({ placeholder, input, meta: { touched, error } }) => {
    // Used the Syncfusion TextBox component for receiving the user input
    return <div>
        <TextBoxComponent placeholder={placeholder} floatLabelType="Auto" {...input}
            onChange={(e) => {
                input.onChange(e.target.value);
            }}
        />
        { /* Display the error message if occurred */ }
        {touched && error && <span className="error">{error}</span>}
    </div>
};
const datePicker = ({ placeholder, input, meta: { touched, error } }) => {
    // Used the Syncfusion DatePicker component for receiving the user date of birth
    return <div>
        <DatePickerComponent placeholder={placeholder} floatLabelType="Auto" {...input}
            onChange={(e) => {
                input.onChange(e.target.value);
            }}
        />
        { /* Display the error message if occurred */ }
        {touched && error && <span className="error">{error}</span>}</div>
};
let LoginForm = (props) => {
    // Get the form data from props
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            { /* Field is used to connect the inputs to store */ }
            { /* Use the Syncfusion TextBox component to receive the user name input */ }
            <Field name="username" component={textBox} placeholder="Enter the user name" />
            { /* Use the Syncfusion TextBox component to receive the user password input */ }
            <Field name="password" component={textBox} placeholder="Enter the password" />
            { /* Use the Syncfusion DatePicker component to receive the user date of birth input */ }
            <Field name="dob" component={datePicker} placeholder="Enter the date of birth" />
            { /* Use the Syncfusion Button component to submit the values */ }
            <ButtonComponent type="submit">Submit</ButtonComponent>
        </form>
    );
};
// Add the required form input validation
const validate = values => {
    // Add the error message while validation fails
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.dob) {
        errors.dob = 'Required';
    }
    return errors;
}
// Connect the form with redux-form to communicate with store
export default LoginForm = reduxForm({
    // A unique name of the form
    form: "login",
    // Add the validate function to validate the form
    validate
})(LoginForm);