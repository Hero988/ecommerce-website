import './form-input.styles.scss'

// creating a form input function where we take in the label and the ...otherProps means everthing else in the FormInput component in Sign-up-form i.e. the type e.t.c
const FormInput = ({label, ...otherProps}) => {
    return (
        <div className="group">
        {/* the name will come through on the event, the required means that this is required and onchange means when there is a new input run the handleChange function 
        // when you pass the value inside the text field the value should be the same. */}
        <input className="form-input" {...otherProps}/>
            { label && (
            //  label of the ceratin one i.e. display name 
            <label 
            className={`${ otherProps.value.length ? 'shrink': '' } form-input-label`}>{label}
            </label>
            )}
        </div>
    )
}

export default FormInput;