import styles from './index.less';
import { Link } from 'umi';
import { Button } from 'antd';

function IndexPage(props: any) {
  const toDetail = () => {
    props.history.push({ pathname: '/detail', query: { id: 1 } });
  };
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Link to="/detail">Detail</Link><br/>
      <Button onClick={toDetail}>详情</Button>
    </div>
  );
}

export default IndexPage;
