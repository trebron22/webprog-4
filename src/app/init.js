import Form from '../modules/form'
import { swal } from '../modules/utils'
import inputDetails from './data';

export default () => {
    const handleSubmit = () => {
        swal.fire({
            title: 'Success!',
            text: 'Registration Complete!',
            icon: 'success'
        }).then(() => {
            window.location.href = 'https://thecodinglove.com/when-im-getting-ready-to-check-the-interns-code'
        })
    }

    const form = new Form({
        formContainerId: 'registrationForm',
        submitButtonText: 'Registration',
        submitCallback: handleSubmit,
        inputDetails
    })

    form.render()
}
