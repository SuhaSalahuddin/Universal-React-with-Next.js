import Link from 'next/link';
import Layout from '../components/Layout';

export default () => (
  <Layout title='About'>
    <Link href="/">
      <a>Home</a> 
    </Link>
    <br/><br/>
    <p>A JS programmer</p>
    <br/><br/>
    <img src="/static/js-logo.png" alt="JS-logo" height='200px'/>
  </Layout>
);
