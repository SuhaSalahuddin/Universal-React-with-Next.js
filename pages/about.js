import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

export default class About extends Component{
  // state = {
  //   user: null
  // };

  static async getInitialProps(){
    const res = await fetch('https://api.github.com/users/suhasalahuddin');
    const data = await res.json();

    return {user: data};
  }

  // componentDidMount(){
  //   fetch('https://api.github.com/users/suhasalahuddin')
  //   .then(res => res.json())
  //   .then(data => {
  //     this.setState({
  //       user: data
  //     });
  //   })
  // }

  render() {
    const {user} = this.props;

    return (
      <Layout title='About'>
        
        <br/><br/>
        <p>{user.name}</p>
        <br/><br/>
        <img src={user.avatar_url} alt="Suha" height='200px'/>
      </Layout>
    );
  }
}
