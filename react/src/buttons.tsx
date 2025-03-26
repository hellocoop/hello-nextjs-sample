'use client'

import React, { useState } from 'react'
import type { ProviderHint, Scope } from '@hellocoop/definitions'
import { Button } from '@hellocoop/definitions'

import { routeConfig } from './provider'

let checkedForStylesheet: boolean = false

interface CommonButtonProps {
    label?: string
    onClick?: any //TBD type: any
    style?: any //TBD type: any
    disabled?: boolean
    showLoader?: boolean
    color?: Button.Color
    theme?: Button.Theme
    hover?: Button.Hover
    targetURI?: string
    providerHint?: ProviderHint[] | string
    promptLogin?: boolean
    promptConsent?: boolean
    loginHint?: string
    domainHint?: string
}

export interface BaseButtonProps extends CommonButtonProps {
    scope?: Scope[] | string
    update?: boolean
}

export interface LoginButtonProps extends CommonButtonProps {
    scope?: Scope[] | string
}

export interface UpdateButtonProps extends CommonButtonProps {
    update?: boolean
}

function BaseButton({
    scope,
    update = false,
    targetURI,
    providerHint,
    label,
    style,
    color = 'black',
    theme = 'ignore-light',
    hover = 'pop',
    showLoader = false,
    disabled = false,
    promptLogin = false,
    promptConsent = false,
    loginHint,
    domainHint,
}: BaseButtonProps) {
    //check if dev has added Hellō stylesheet to pages with Hellō buttons
    if (typeof window != 'undefined' && !checkedForStylesheet) {
        const hasStylesheet = Array.from(
            document.head.getElementsByTagName('link'),
        ).find(
            (element) =>
                element.getAttribute('rel') === 'stylesheet' &&
                element.getAttribute('href')?.startsWith(Button.STYLES_URL),
        )

        if (!hasStylesheet)
            console.warn(
                'Could not find Hellō stylesheet. Please add to pages with Hellō buttons. See http://hello.dev/docs/buttons/#stylesheet for more info.',
            )

        checkedForStylesheet = true
    }

    const helloBtnClass = Button.CLASS_MAPPING[color]?.[theme]

    const [clicked, setClicked] = useState(false)

    const loginRoute = new URL(routeConfig.login, 'https://example.com') // hack so we can use URL()

    if (scope) {
        if (typeof scope == 'string')
            loginRoute.searchParams.set('scope', scope)
        else loginRoute.searchParams.set('scope', scope.join(' '))
    }

    targetURI =
        targetURI ||
        (typeof window != 'undefined' && window.location.pathname) ||
        ''
    //window can be undefined when running server-side
    loginRoute.searchParams.set('target_uri', targetURI)

    if (update) loginRoute.searchParams.set('prompt', 'consent')

    if (loginHint) loginRoute.searchParams.set('login_hint', loginHint)

    if (domainHint) loginRoute.searchParams.set('domain_hint', domainHint)

    if (providerHint) {
        if (typeof providerHint == 'string')
            loginRoute.searchParams.set('provider_hint', providerHint)
        else
            loginRoute.searchParams.set('provider_hint', providerHint.join(' '))
    }

    if (promptLogin && promptConsent) {
        loginRoute.searchParams.set('prompt', 'login consent')
    } else if (promptLogin) {
        loginRoute.searchParams.set('prompt', 'login')
    } else if (promptConsent) {
        loginRoute.searchParams.set('prompt', 'consent')
    }

    const onClickHandler = (): void => {
        setClicked(true)
        if (typeof window !== 'undefined')
            window.location.href = loginRoute.pathname + loginRoute.search
    }

    return (
        <button
            onClick={onClickHandler}
            disabled={disabled || clicked}
            style={style}
            className={`hello-btn ${helloBtnClass} ${Button.HOVER_MAPPING[hover]} ${showLoader || clicked ? 'hello-btn-loader' : ''}`}
        >
            {label}
        </button>
    )
}

export function ContinueButton(props: LoginButtonProps) {
    return (
        <BaseButton label="ō&nbsp;&nbsp;&nbsp;Continue with Hellō" {...props} />
    )
}

export function LoginButton(props: LoginButtonProps) {
    return (
        <BaseButton label="ō&nbsp;&nbsp;&nbsp;Log in with Hellō" {...props} />
    )
}

export function UpdateProfileButton(props: UpdateButtonProps) {
    return (
        <BaseButton
            label="ō&nbsp;&nbsp;&nbsp;Update Profile with Hellō"
            {...props}
            update={true}
        />
    )
}
