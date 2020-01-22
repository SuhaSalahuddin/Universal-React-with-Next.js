import Layout from '../components/Layout';

const Post = ({url}) => (
  <Layout title={url.query.title}>
    <p style={{width: '80%'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, eos accusantium tempore molestiae voluptas alias quia iusto? Minus perferendis eaque, aliquid doloremque sed accusantium nulla cum dignissimos laborum velit iste?</p>
  </Layout>
);

export default Post;