import React from 'react';
import { Header, Divider } from 'semantic-ui-react';
const About = () => {
  return (
    <div>
      <Header as='h1'>This app finds and displays Github Profiles.</Header>
      <Header as='h5'>
        Made with{' '}
        <span role='img' aria-label='heart'>
          ❤️
        </span>{' '}
        by Raghu
      </Header>
      <Divider hidden></Divider>
      <Header as='h3'>v1.0.0</Header>
    </div>
  );
};
export default About;
