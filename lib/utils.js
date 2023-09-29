export function getConsoleURI() {
    const params = new URLSearchParams(window.location.search)
    if(!params)
        return
    const consoleURI = params.get('console_uri')
    if(consoleURI)
        return consoleURI
    return false
}