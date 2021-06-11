export const convertDateToString = (dateData) => {
    const monthNames = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ]

    const date = new Date(dateData)
    return `${date.toLocaleDateString('es-ES', { weekday: 'long' })} ${date.getDate()} de ${
        monthNames[date.getMonth()]
    }, ${date.getFullYear()}`
}

export const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
}
