import React, { useState } from 'react'
import { useRouter } from 'next/router'

export interface BaseButtonProps {
    label?: string
    onClick?: any //TBD type: any
    style?: any //TBD type: any
    disabled?: boolean
    showLoader?: boolean
}

export function BaseButton({ label, onClick, disabled, showLoader, style } : BaseButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} style={style} className={`hello-btn-black-and-static ${showLoader ? 'hello-btn-loader' : ''}`}>
           {label}
        </button>
    )
}

export function LoginBaseButton({ label }: { label: string }) {
    const [clicked, setClicked] = useState(false)
    // const clicked = false
    const { push } = useRouter()

    const loginRoute = "?login=true"
    const login = (): void => {
        setClicked(true)
        push(loginRoute)
    }

    return <BaseButton label={label} onClick={login} disabled={clicked} showLoader={clicked} />
}

export function ContinueButton() {
    return <LoginBaseButton label="ō&nbsp;&nbsp;&nbsp;Continue with Hellō" />
}

export function LoginButton() {
    return <LoginBaseButton label="ō&nbsp;&nbsp;&nbsp;Log in with Hellō" />
}

export function UpdateBaseButton({ label, scopeToUpdate }: { label: string, scopeToUpdate: string }) {
    // const [clicked, setClicked] = useState(false)
    const clicked = false
    const { push } = useRouter()

    const updateRoute = "?scope=openid profile_update " + scopeToUpdate
    const login = (): void => {
        // setClicked(true)
        push(updateRoute)
    }

    return <BaseButton label={label} onClick={login} disabled={clicked} showLoader={clicked} style={{width: '270px'}} />
}

export function UpdateEmailButton() {
    return <UpdateBaseButton label="ō&nbsp;&nbsp;&nbsp;Update Email with Hellō" scopeToUpdate="email" />
}

export function UpdatePictureButton() {
    return <UpdateBaseButton label="ō&nbsp;&nbsp;&nbsp;Update Picture with Hellō" scopeToUpdate="picture" />
}

//TBD
// export function UpdateProfileButton() {
//     return <UpdateBaseButton label="ō&nbsp;&nbsp;&nbsp;Update Picture with Hellō" scopeToUpdate="profile" />
// }