import Link from "next/link";
import Layout from "../components/Layout";

// npm run dev
// STATELESS FUNCTIONAL COMPONENT
const Index = () => (
  <Layout title='Home'> 
    <br/>
    <Link href="/about"><a>About</a></Link>
    <br />    <br />
    <p> Welcome to the home page </p> <br/><br/>
  </Layout>
);
export default Index;
