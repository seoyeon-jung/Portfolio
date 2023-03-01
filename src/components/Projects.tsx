import styled from "styled-components";

export const Projects = () => {
  return (
    <Section>
      <Container>
        <Header>this is projects page</Header>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  background-color: #bdffbe;
  width: 100%;
  height: 100%;
`;

const Container = styled.div``;

const Header = styled.div`
  font-size: 40px;
  text-align: center;
`;
