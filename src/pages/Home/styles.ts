import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  grid-area: content;
`;

// Intro Card

export const IntroContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  padding: 5.75rem 0;
`;

export const StoreDescriptionContainer = styled.section`
  max-width: 36.75rem;

  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const TitleContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.BASE_TITLE};
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-size: 1.25rem;
    line-height: 130%;
  }
`;

export const ItemsDescriptionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1.25rem 2.5rem;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme.BASE_TEXT};
    line-height: 130%;
  }
`;
