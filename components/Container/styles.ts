import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1280px;
  margin: auto;
  padding: 4rem 1rem;

  @media (min-width: 768px) {
    padding: 4rem 10%;
  }

  @media (min-width: 1024px) {
    padding: 4rem 15%;
  }
`;
