import { isNil } from 'ramda'
import Form from './form'

export default class FormElement {
    render({
        formInstance,
        id,
        title,
        type,
        name,
        placeholder,
        isRequired
    } = {}) {
        const inputWrapper = document.createElement('div')
        inputWrapper.classList.add('input-wrapper')

        const label = document.createElement('label')
        label.innerHTML = title
        label.htmlFor = name

        const input = document.createElement('input')
        input.id = id
        input.name = name
        input.type = type
        input.placeholder = placeholder
        input.required = isRequired

        if (Form.isTextInput(input) || Form.isEmailInput(input) || Form.isPasswordInput(input)) {
            const validateInput = event => {
                const inputElement = event.target
                if (!isNil(formInstance)) {
                    formInstance.isInputFieldValid(inputElement)
                }
            }

            input.onkeyup = validateInput
            input.onchange = validateInput
        }

        const errorMessage = document.createElement('div')
        errorMessage.classList.add('error-message')

        const inputContainer = document.createElement('div')
        inputContainer.classList.add('input-container')
        inputContainer.appendChild(input)
        inputContainer.appendChild(errorMessage)

        inputWrapper.appendChild(label)
        inputWrapper.appendChild(inputContainer)

        return inputWrapper
    }
}
