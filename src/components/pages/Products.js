import { Sections, Buttons } from "./SectionStyle"
import styled from 'styled-components';

const PageSection = styled.div`
  ${Sections};
  background: brown;
`;

const Btns = styled.button`
    ${Buttons}
`

const Products = () => {
    return (
        <PageSection>
            <h1>Products</h1>
            <Btns>Buy Stuff</Btns>
        </PageSection>
    )
}

export default Products