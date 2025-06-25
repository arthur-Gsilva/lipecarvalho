import { IconType } from "react-icons"; 
import { PiStudentFill } from "react-icons/pi";
import { BsHeadsetVr } from "react-icons/bs";
import { BsMicrosoft } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";

export type Experience = {
    id: number,
    englishTitle: string,
    portugueseTitle: string,
    englishText: string,
    portugueseText: string,
    icon: IconType
}

export const experiences: Experience[] = [
    {
        id: 1,
        englishTitle: 'Academic Background',
        portugueseTitle: "Formação Acadêmica",
        englishText: 'Degree in Languages (Letras) with a postgraduate diploma in innovative educational practices focused on the use of technology in teaching. Currently pursuing a Master’s degree in Emerging Technologies in Education.',
        portugueseText: "Licenciado em Letras, com pós-graduação em práticas educacionais inovadoras voltadas ao uso de tecnologias no ensino. Mestrando em tecnologias emergentes em educação.",
        icon: PiStudentFill
    },
    {
        id: 2,
        englishTitle: 'Innovative Teaching Experience',
        portugueseTitle: "Experiência em Ensino Inovador",
        englishText: 'Experience with active learning methodologies, gamification, virtual reality (VR), and the development of educational technology projects.',
        portugueseText: "Atuação com metodologias ativas, gamificação, realidade virtual (VR) e desenvolvimento de projetos voltados à tecnologia educacional.",
        icon: BsHeadsetVr
    },
    {
        id: 3,
        englishTitle: 'Google and Microsoft Education',
        portugueseTitle: "Google e Microsoft Education",
        englishText: 'Certified educator by both Microsoft and Google, with solid experience as an instructor and specialist in digital tools for education.',
        portugueseText: "Educador certificado pela Microsoft e Google, com experiência como instrutor e especialista em ferramentas digitais para o ensino.",
        icon: BsMicrosoft
    },
    {
        id: 4,
        englishTitle: 'Educational Content Creation',
        portugueseTitle: "Produção de Conteúdo Educacional",
        englishText: 'Author of educational books and teaching guides, as well as creator of a YouTube channel focused on tutorials for Microsoft Teams and Google Classroom.',
        portugueseText: "Criador de livros e manuais didático, assim como um canal no YouTube com foco em tutoriais para Microsoft Teams e Google Classroom.",
        icon: MdOndemandVideo
    },
]