import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/logo.svg";

import { Header, RepositoryInfo, Issues } from "./styles";

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadRepositoryInfo(): Promise<void> {
      const [responseRepo, responseIssues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepository(responseRepo.data);
      setIssues(responseIssues.data);
    }

    loadRepositoryInfo();
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logo} alt="Logo GithubExplorer" />

        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <span>{repository.description}</span>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url} target="__blank">
            <div>
              <strong>{issue.title}</strong>
              <span>{issue.user.login}</span>
            </div>

            <FiChevronRight size={20} color="#cbcbd6" />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
