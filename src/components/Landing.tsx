import styled from "styled-components";

export const Landing = () => {
  return (
    <Section>
      <Container>
        <Header>this is Landing page</Header>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  background-color: #d4d3d3;
  width: 100%;
  height: 100%;
`;

const Container = styled.div``;

const Header = styled.div`
  font-size: 40px;
  text-align: center;
`;
