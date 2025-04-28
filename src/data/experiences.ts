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
        portugueseTitle: "Formação acadêmica",
        englishText: 'i have a degree in literature and a postgraduate qualification in innovative educational pratices',
        portugueseText: "Sou formado em Letras e tenho pós-graduação em práticas educacionais inovadoras",
        icon: PiStudentFill
    },
    {
        id: 2,
        englishTitle: 'Innovative Teaching Experience',
        portugueseTitle: "Experiência de Ensino Inovadora",
        englishText: 'Experienced in teaching with active methodologies, gamification, VR and developing educational technology projects',
        portugueseText: "Experiência em ensino com metodologias ativas, gamificação, RV e desenvolvimento de projetos de tecnologia educacional",
        icon: BsHeadsetVr
    },
    {
        id: 3,
        englishTitle: 'Google and Microsoft Education',
        portugueseTitle: "Google e Microsoft Education",
        englishText: 'Microsoft Certified Educator and Expert, Google Certified Trainer and Educator Levels 1 and 2',
        portugueseText: "Educador e especialista certificado pela Microsoft, instrutor e educador certificado pelo Google níveis 1 e 2",
        icon: BsMicrosoft
    },
    {
        id: 4,
        englishTitle: 'Academic Background',
        portugueseTitle: "Formação acadêmica",
        englishText: 'Create 360°  educational videos, teaching content, and a Youtube channel  focused on how to use the platform Microsoft Teams',
        portugueseText: "Criador de vídeos educacionais 360°, conteúdo didático e um canal do YouTube focado como usar a plataforma do Microsoft Teams",
        icon: MdOndemandVideo
    },
]