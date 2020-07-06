import React from 'react';
import { Segment, List, Header, Divider } from 'semantic-ui-react';
import Repo from './Repo';
function Repos({ repos }) {
  console.log(repos.length);
  return (
    <div>
      {repos.length > 0 && (
        <Segment padded='very'>
          <Header as='h3'>Public Repos</Header>
          <List horizontal>
            {repos.map((repo) => (
              <Repo key={repo.id} repo={repo} />
            ))}
          </List>
        </Segment>
      )}
      <Divider hidden />
      <Divider hidden />
    </div>
  );
}

export default Repos;
