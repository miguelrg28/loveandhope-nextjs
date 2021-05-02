import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'

//Redes sociales
export const SocialMedia = [
    {
        id: 0,
        name: 'Instagram',
        icon: <AiOutlineInstagram />,
        url: 'https://www.instagram.com/henuevaesperanzard/',
    },
    {
        id: 1,
        name: 'Facebook',
        icon: <AiOutlineFacebook />,
        url: 'https://www.facebook.com/henuevaesperanzard',
    },
    {
        id: 2,
        name: 'Email',
        icon: <AiOutlineMail />,
        url: 'mailto: hnuevaesperanza@gmail.com',
    },
]

//Información de la parte del pie de la página
export const FooterInfo = {
    title: 'Hogar Escuela Nueva Esperanza',
    cellnumber: '809-612-2712',
}

export const ErrorMessages = {
    invalidMail: 'Correo electrónico inválido',
    emptyFields: 'Debe rellenar los campos',
    emailDuplicated: 'Este correo electrónico ya está suscrito',
}
