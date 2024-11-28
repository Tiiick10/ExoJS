let getPreferredScheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light'

let mode = (getPreferredScheme === "dark") ? "Mode sombre activé" : "Mode clair activé"

alert(mode)
