import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
  Container,
  RepositoryInfo,
  RepositoryCount,
  RepositoryIssues,
} from "./styles";

const SkeletonLoading: React.FC = () => {
  return (
    <Container>
      <SkeletonTheme color="#ddd" highlightColor="#d4d4d4 ">
        <RepositoryInfo>
          <Skeleton circle height={120} width={120} />
          <div style={{ width: 500, marginLeft: 24 }}>
            <Skeleton height={48} width={300} />
            <Skeleton height={32} width={450} />
          </div>
        </RepositoryInfo>

        <RepositoryCount>
          <Skeleton height={48} width={150} />
          <Skeleton height={48} width={150} />
          <Skeleton height={48} width={150} />
        </RepositoryCount>

        <RepositoryIssues>
          <Skeleton height={90} count={5} />
        </RepositoryIssues>
      </SkeletonTheme>
    </Container>
  );
};

export default SkeletonLoading;
