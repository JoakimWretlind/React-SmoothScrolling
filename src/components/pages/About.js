import { Sections, Buttons } from "./SectionStyle"
import styled from 'styled-components';

const PageSection = styled.div`
  ${Sections};
  background: maroon;
`;

const Btns = styled.button`
    ${Buttons}
`

const About = () => {
    return (
        <PageSection>
            <h1>About</h1>
            <Btns>Tell Me More</Btns>
        </PageSection>
    )
}

export default About