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
