import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import { Component } from 'react';

export default class About extends Component{
  static async getInitialProps(){
    const res = await fetch('https://api.github.com/users/suhasalahuddin');
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return {user: data, statusCode};
  }

  render() {
    const {user, statusCode} = this.props;

    if(statusCode){
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title='About'>
        
        <br/><br/>
        <p>{user.name}</p>
        <p>{user.bio}</p>
        <br/><br/>
        <img src={user.avatar_url} alt="Suha" height='200px'/>
      </Layout>
    );
  }
}
