import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Alert from './components/layout/Alert';
import {
  Segment,
  Menu,
  Header,
  Container,
  Grid,
  Input,
  Icon,
  Button,
  Divider,
} from 'semantic-ui-react';
import Users from './components/Users/Users';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [alert, setAlerts] = useState(null);
  const [text, setText] = useState('');

  const setAlert = (text, color) => {
    setAlerts({ msg: text, color: color });
    setTimeout(() => setAlerts(null), 2500);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please Enter Something', 'red');
    } else {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      setUsers(res.data.items);

      setText('');
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <div className='App'>
      <Container>
        <Divider hidden />
        <Menu borderless>
          <Container>
            <Menu.Item header>
              <Header>
                <Icon name='github' style={{ display: 'inline' }}></Icon>Github
                Finder
              </Header>
            </Menu.Item>
            <Menu.Item as='a'>Home</Menu.Item>
            <Menu.Item as='a'>About</Menu.Item>
          </Container>
        </Menu>
      </Container>
      <Divider hidden></Divider>
      <Container text>
        <Segment padded very color='green'>
          <Grid>
            <Grid.Row style={{ alignItems: 'center' }}>
              <Grid.Column textAlign='center'>
                <div style={{ display: 'inline-block' }}>
                  <Header className='ui header'>
                    <Header>
                      <span style={{ color: '#1c77c3' }}>Welcome! </span>
                    </Header>
                    Search for a{' '}
                    <Icon name='github' style={{ display: 'inline' }}></Icon>
                    profile
                  </Header>
                </div>
                <Divider hidden />
                <Input
                  focus
                  onChange={onChange}
                  placeholder='Enter Profile Name'
                  value={text}
                />
                <Divider hidden />
                <Button onClick={onSubmit} primary>
                  Search
                </Button>
                <Button secondary onClick={clearUsers}>
                  &nbsp;Clear &nbsp;
                </Button>
                <Divider hidden />
                <Alert alert={alert} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Users users={users} loading={loading} />
      </Container>
    </div>
  );
};

export default App;
