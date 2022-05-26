import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'Git-Github-Explorer',
  description: 'Learning React',
  link: 'https://github.com/IsisFraga/git-github-explorer'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
        <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}