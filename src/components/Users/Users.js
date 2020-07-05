import React from 'react';
import { Segment, Card, Divider, Dimmer, Loader } from 'semantic-ui-react';
import User from './User';
function Users({ loading, users }) {
  console.log(users);

  return loading ? (
    <Segment basic>
      <Divider hidden />
      <Dimmer active inverted>
        <Loader inverted>Getting that for you!</Loader>
      </Dimmer>
    </Segment>
  ) : (
    <Segment basic padded='very'>
      <Card.Group>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Card.Group>
    </Segment>
  );
}

export default Users;
