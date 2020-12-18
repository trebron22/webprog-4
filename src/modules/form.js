import { v4 as generateUniqueId } from 'uuid'
import FormElement from './formElement'
import { isEmailValid, isObjEmpty, isPasswordValid, swal } from './utils'

export default class Form {
    constructor({ formContainerId, submitButtonText, submitCallback, inputDetails } = {}) {
        this.isFormValidatedAtLeastOnce = false
        this.formContainerId = formContainerId || generateUniqueId()
        this.inputDetails = inputDetails || []
        this.submitButtonText = submitButtonText || 'Submit'
        this.submitCallback = submitCallback || Form.defaultSubmitAction
    }

    static isTextInput = inputElement => inputElement.type === 'text'

    static isEmailInput = inputElement => inputElement.type === 'email'

    static isPasswordInput = inputElement => inputElement.type === 'password'

    render() {
        const view = document.getElementById('view')

        const formContainer = document.createElement('form')
        formContainer.id = this.formContainerId
        formContainer.classList.add('form-container')

        const title = this.getFormTitle()
        formContainer.appendChild(title)

        const formBody = this.getFormBody()
        formContainer.appendChild(formBody)

        const submitBtn = this.getSubmitButton()
        formContainer.appendChild(submitBtn)

        view.appendChild(formContainer)
    }

    getFormBody() {
        const formBody = document.createElement('div')
        formBody.classList.add('form-body')
        const formElements = this.getFormElements()
        formElements.forEach(item => {
            formBody.appendChild(item)
        })
        return formBody
    }

    getFormElements() {
        return this.inputDetails.map(item => {
            return new FormElement().render({ ...item, formInstance: this })
        })
    }

    getFormTitle() {
        const titleContainer = document.createElement('div')
        titleContainer.classList.add('title-container')
        titleContainer.innerHTML = 'Registration Form'
        return titleContainer
    }

    getSubmitButton() {
        const submitBtn = document.createElement('button')
        submitBtn.classList.add('submit-btn')
        submitBtn.innerHTML = this.submitButtonText
        submitBtn.onclick = event => {
            event.preventDefault()
            this.handleSubmit()
        }
        return submitBtn
    }

    handleSubmit() {
        const formElement = document.getElementById(this.formContainerId)
        const formElements = formElement.elements
        const validationResult = this.validateForm(formElements)

        if (validationResult === true) {
            this.submitCallback()
        }
    }

    validateForm(formElements) {
        this.isFormValidatedAtLeastOnce = true
        const results = new Set()
        for (const input of formElements) {
            if (input.required) {
                const isValid = this.isInputFieldValid(input)
                results.add(isValid)
            }
        }
        return !results.has(false)
    }

    isInputFieldValid(input) {
        let result = true

        if (input.required && this.isFormValidatedAtLeastOnce) {
            const isText = Form.isTextInput(input)
            const isEmail = Form.isEmailInput(input)
            const isPassword = Form.isPasswordInput(input)

            if (isText || isEmail || isPassword) {
                const { value } = input
                const data = this.inputDetails.find(i => i.id === input.id)
                if (isObjEmpty(value)) {
                    Form.toggleErrorOnInput(input, data.errorMessage.missing)
                    result = false
                } else if (
                    (isText && value.length < 4)
                    || (isEmail && !isEmailValid(value))
                    || (isPassword && !isPasswordValid(value))
                ) {
                    Form.toggleErrorOnInput(input, data.errorMessage.invalid)
                    result = false
                } else {
                    Form.toggleErrorOnInput(input)
                }
            }
        }

        return result
    }

    static defaultSubmitAction() {
        swal.fire({
            title: 'Success!',
            text: 'You\'ve successfully submitted the form!',
            icon: 'success'
        })
    }

    static toggleErrorOnInput(inputElement, errorMessage) {
        const errorClass = 'error-visible'
        const errorElement = inputElement.nextElementSibling

        if (isObjEmpty(errorMessage)) {
            errorElement.classList.remove(errorClass)
            errorElement.innerHTML = ''
        } else {
            errorElement.classList.add(errorClass)
            errorElement.innerHTML = errorMessage
        }
    }
}
