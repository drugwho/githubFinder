import React from 'react';
import { List } from 'semantic-ui-react';
const Repo = (repo) => {
  return (
    <>
      <List.Item as='a' href={repo.repo.html_url}>
        {repo.repo.name}
      </List.Item>
    </>
  );
};
export default Repo;
