import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header"
    "content";

  margin: 0 auto;
`;
