import { Sections, Buttons } from "./SectionStyle"
import styled from 'styled-components';

const PageSection = styled.div`
  ${Sections};
  background: orange;
`;

const Btns = styled.button`
    ${Buttons}
`

const Home = () => {
    return (
        <PageSection>
            <h1>Home</h1>
            <Btns>CLICK</Btns>
        </PageSection>
    )
}

export default Home