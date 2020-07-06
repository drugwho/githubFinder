import React, { useEffect } from 'react';
import {
  Grid,
  Image,
  Segment,
  Container,
  Button,
  Icon,
  Header,
  Divider,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import Repos from '../Repos/Repos';
import { Link } from 'react-router-dom';
const SingleUser = ({ getUser, getRepos, repos, user, match, loading }) => {
  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  console.log(repos);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return loading ? (
    <Segment basic>
      <Divider hidden />
      <Dimmer active inverted>
        <Loader inverted>Getting that for you!</Loader>
      </Dimmer>
    </Segment>
  ) : (
    <Container>
      {name ? (
        <Header as='h2'>{name}'s profile</Header>
      ) : (
        <Header as='h2'>{login}'s profile</Header>
      )}
      <Segment padded='very'>
        <Grid centered stackable>
          <Grid.Column width={4}>
            <Image src={avatar_url} />
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4'>
              Hireable :{' '}
              {hireable ? (
                <Icon name='check'></Icon>
              ) : (
                <Icon name='close'></Icon>
              )}
            </Header>
            {location && <Header as='h4'>Location: {location}</Header>}
            {bio && <Header as='h4'>Bio: {bio}</Header>}
            {blog && <Header as='h4'>Blog: {blog}</Header>}
            {company && <Header as='h4'>Company: {company}</Header>}
          </Grid.Column>
          <Grid.Column width={5}>
            {public_repos && (
              <Header as='h4'>Public Repos: {public_repos}</Header>
            )}
            {public_gists && (
              <Header as='h4'>Public Gists: {public_gists}</Header>
            )}
            {followers && <Header as='h4'>Followers: {followers}</Header>}

            {following && <Header as='h4'>Following: {following}</Header>}
          </Grid.Column>
        </Grid>
        <Divider hidden></Divider>
        <Link to='/'>
          <Button color='black'>Back</Button>
        </Link>
      </Segment>
      <Repos repos={repos} />
    </Container>
  );
};
export default SingleUser;
