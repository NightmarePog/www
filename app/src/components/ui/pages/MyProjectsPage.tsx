
import ProjectComponent from "@/components/project"
import { Title } from "../typography/Title"
import { Projects } from "@/constants/Projects"

const MyProjectsPage = () => {
    return <div className="flex items-center justify-center pt-20 mx-5">
        <main>
        <Title>My projects</Title>
        <div className="p-5"/>
        {Projects.map((item, i) => <ProjectComponent 
        name={item.name}
        description={item.description}
        link={item.link}
        image={item.image}
        reverse={i%2 === 1}/>)}
        </main>
    </div>
}

export default MyProjectsPage