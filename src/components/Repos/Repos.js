import React from 'react';
import { Segment, List, Header } from 'semantic-ui-react';
import Repo from './Repo';
function Repos({ repos }) {
  return (
    <Segment>
      <Header as='h3'>Public Repos</Header>
      <List horizontal>
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
      </List>
    </Segment>
  );
}

export default Repos;
