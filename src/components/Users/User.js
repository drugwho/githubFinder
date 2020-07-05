import React from 'react';
import { Card, Button, Image, Divider } from 'semantic-ui-react';
const User = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Image size='mini' src={avatar_url} rounded />
          <Divider hidden />
          <Card.Header>{login}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='green'>
            More
          </Button>
        </Card.Content>
      </Card>
    </>
  );
};
export default User;
