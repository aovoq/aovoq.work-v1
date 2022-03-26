import Skill from './Skill'
import styled from 'styled-components'
import {
   SiAdobe,
   SiCss3,
   SiHtml5,
   SiJavascript,
   SiNextdotjs,
   SiNodedotjs,
   SiPhp,
   SiReact,
} from 'react-icons/si'

const Skills = () => {
   const skillsets = [
      { component: <SiReact />, name: 'React' },
      { component: <SiHtml5 />, name: 'HTML' },
      { component: <SiCss3 />, name: 'CSS' },
      { component: <SiJavascript />, name: 'JavaScript' },
      { component: <SiNodedotjs />, name: 'Node.js' },
      { component: <SiNextdotjs />, name: 'Next.js' },
      { component: <SiPhp />, name: 'PHP' },
      { component: <SiAdobe />, name: 'Adobe' },
   ]

   return (
      <Container>
         {skillsets.map((skill, index) => {
            return (
               <Skill
                  component={skill.component}
                  name={skill.name}
                  index={index}
                  key={skill.name}
               />
            )
         })}
      </Container>
   )
}

const Container = styled.div`
   display: flex;
   justify-content: space-between;
   width: 900px;
   padding: 0 3rem;
`

export default Skills
