import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepositoryInfo = styled.div`
  margin-top: 80px;
  display: flex;
  align-items: center;
`;

export const RepositoryCount = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
`;

export const RepositoryIssues = styled.div`
  margin-top: 80px;

  span {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 16px;
    }
  }
`;
