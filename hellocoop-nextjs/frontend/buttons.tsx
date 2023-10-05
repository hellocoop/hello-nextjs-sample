import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './buttons.module.css'

import { loginApiRoute } from '../lib/config'

export type Color = "black" | "white"
export type Theme = "ignore-light" | "ignore-dark" | "aware-invert" | "aware-static"
export type Hover = "pop" | "glow" | "flare" | "none"

export interface BaseButtonProps {
    label?: string
    onClick?: any //TBD type: any
    style?: any //TBD type: any
    disabled?: boolean
    showLoader?: boolean
    color?: Color
    theme?: Theme
    hover?: Hover
    targetURI?: string
    providerHint?: string
}


export interface LoginButtonProps extends BaseButtonProps {
    scope?: string
}

export interface UpdateButtonProps extends BaseButtonProps {
    updateScope?: "email" | "picture"
}

const CLASS_MAPPING = {
    black: {
        "ignore-light": "",
        "ignore-dark": "hello-btn-black-on-dark",
        "aware-invert": "hello-btn-black-and-invert",
        "aware-static": "hello-btn-black-and-static"
    },
    white: {
        "ignore-light": "hello-btn-white-on-light",
        "ignore-dark": "hello-btn-white-on-dark",
        "aware-invert": "hello-btn-white-and-invert",
        "aware-static": "hello-btn-white-and-static"
    },
}

const HOVER_MAPPING = {
    "pop": "",
    "glow": "hello-btn-hover-glow",
    "flare": "hello-btn-hover-flare",
    "none": "hello-btn-hover-none"
}

function BaseButton({ label, onClick, disabled, showLoader, style, color = "black", theme = "ignore-light", hover = "pop" } : BaseButtonProps) {
    const helloBtnClass = CLASS_MAPPING[color]?.[theme]
    return (
        <button onClick={onClick} disabled={disabled} style={style} className={`${styles['hello-btn']} ${styles[helloBtnClass]} ${styles[HOVER_MAPPING[hover]]} ${showLoader ? styles['hello-btn-loader'] : ''}`}>
           {label}
        </button>
    )
}

function LoginBaseButton(props: LoginButtonProps) {
    const { scope, targetURI, providerHint } = props

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

    return <BaseButton {...props} onClick={login} disabled={clicked} showLoader={clicked} />
}

export function ContinueButton(props: LoginButtonProps) {
    return <LoginBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Continue with Hellō" />
}

export function LoginButton(props: LoginButtonProps) {
    return <LoginBaseButton {...props} label="ō&nbsp;&nbsp;&nbsp;Log in with Hellō" />
}

function UpdateBaseButton(props: UpdateButtonProps) {
    let { label, updateScope, targetURI, providerHint } = props
    const [clicked, setClicked] = useState(false)
    const { push } = useRouter()

    const params = new URLSearchParams()
    if(updateScope)
        params.set("scope", "profile_update " + updateScope)
                            
                             //window can be undefined when running server-side
    targetURI = targetURI || (typeof window != 'undefined' && window.location.pathname) || "" //Go back to current page
    params.set("target_uri", targetURI)
    
    if(providerHint)
        params.set("provider_hint", providerHint)

    const update = (): void => {
        setClicked(true)
        push(loginApiRoute + "&" + params.toString())
    }

    return <BaseButton {...props} onClick={update} disabled={clicked} showLoader={clicked} style={{width: '270px'}} />
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