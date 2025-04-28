import { AboutMe } from "@/components/aboutme/AboutMe"
import { Experience } from "@/components/experiences/Experience"
import { Banner } from "@/components/home/Banner"

const home = () => {
    return(
        <main>
            <Banner />
            <AboutMe />
            <Experience />
        </main>
    )
}

export default home