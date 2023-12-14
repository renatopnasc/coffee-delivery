import styled from "styled-components";

export const SuccessContainer = styled.main`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h1 {
    color: ${(props) => props.theme.YELLOW_DARK};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    font-family: "Baloo 2", sans-serif;
  }

  > p {
    color: ${(props) => props.theme.BASE_SUBTITLE};
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 130%;
  }
`;

export const OrderDetailsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderInfoContainer = styled.div`
  max-width: 32.875rem;

  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid ${(props) => props.theme.PURPLE};
  border-radius: 6px 36px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    color: ${(props) => props.theme.BASE_TEXT};
    line-height: 130%;
  }

  span {
    font-weight: 700;
    color: ${(props) => props.theme.BASE_TEXT};
  }
`;
