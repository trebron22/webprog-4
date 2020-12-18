import { isEmpty, isNil } from 'ramda'
import Swal from 'sweetalert2'

export const isEmailValid = (emailString = '') => {
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailFormat.test(emailString)
}

export const isPasswordValid = (passwordString = '') => {
    const passwordFormat = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
    return passwordFormat.test(passwordString)
}

export const isObjEmpty = arg => isEmpty(arg) || isNil(arg)

export const swal = Swal.mixin({
    showClass: {
        popup: 'animate__animated animate__zoomIn'
    },
    hideClass: {
        popup: 'animate__animated animate__zoomOut'
    }
})
