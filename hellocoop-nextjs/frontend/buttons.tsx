import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { loginApiRoute } from '../lib/config'

export interface BaseButtonProps {
    label?: string
    onClick?: any //TBD type: any
    style?: any //TBD type: any
    disabled?: boolean
    showLoader?: boolean
}


export interface LoginButtonProps {
    label: string
    scope?: string
    targetURI?: string
    providerHint?: string
}

export interface UpdateButtonProps {
    label: string
    updateScope?: "email" | "picture"
    targetURI?: string
    providerHint?: string
}

function BaseButton({ label, onClick, disabled, showLoader, style } : BaseButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} style={style} className={`hello-btn-black-and-static ${showLoader ? 'hello-btn-loader' : ''}`}>
           {label}
        </button>
    )
}

function LoginBaseButton({ label, scope, targetURI, providerHint }: LoginButtonProps) {
    const [clicked, setClicked] = useState(false)
    const { push } = useRouter()

    const params = new URLSearchParams()
    if(scope)
        params.set("scope", scope)
    if(targetURI)
        params.set("target_uri", targetURI)
    if(providerHint)
        params.set("provider_hint", providerHint)

    const login = (): void => {
        setClicked(true)
        push(loginApiRoute + "&" + params.toString())
    }

    return <BaseButton label={label} onClick={login} disabled={clicked} showLoader={clicked} />
}

export function ContinueButton(props: LoginButtonProps) {
    return <LoginBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Continue with Hellō" />
}

export function LoginButton(props: LoginButtonProps) {
    return <LoginBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Log in with Hellō" />
}

function UpdateBaseButton({ label, updateScope, targetURI, providerHint }: UpdateButtonProps) {
    const [clicked, setClicked] = useState(false)
    const { push } = useRouter()

    const params = new URLSearchParams()
    if(updateScope)
        params.set("scope", "profile_update " + updateScope)
    
    targetURI = targetURI || window.location.pathname //Go back to current page
    params.set("target_uri", targetURI)
    
    if(providerHint)
        params.set("provider_hint", providerHint)

    const update = (): void => {
        setClicked(true)
        push(loginApiRoute + "&" + params.toString())
    }

    return <BaseButton label={label} onClick={update} disabled={clicked} showLoader={clicked} style={{width: '270px'}} />
}

export function UpdateEmailButton(props: UpdateButtonProps) {
    return <UpdateBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Update Email with Hellō" updateScope="email" />
}

export function UpdatePictureButton(props: UpdateButtonProps) {
    return <UpdateBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Update Picture with Hellō" updateScope="picture" />
}

//TBD
// export function UpdateProfileButton() {
//     return <UpdateBaseButton label="ō&nbsp;&nbsp;&nbsp;Update Picture with Hellō" updateScope="profile" />
// }