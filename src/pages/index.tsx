import { Button, Table } from 'antd';
import ReactECharts from 'echarts-for-react';
import { FC, useState } from 'react';

interface DataProps {
  picUrl: string;
  year: string;
  title: string;
  month: string;
  day: string;
  details: string;
}
type IData = DataProps[];
interface IHomeProps {
  data: IData;
}
const Home: FC<IHomeProps> = ({ data }) => {
  const [number, setNumber] = useState(0);
  const setYData = (data: IData) => {
    return data.map((item) => Number(item.year));
  };
  const setXData = (data: IData) => {
    return data.map((item) => item.title);
  };
  const xData = setXData(data);
  const yData = setYData(data);

  const option = {
    xAxis: {
      type: 'category',
      data: xData,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: yData,
        type: 'line',
      },
    ],
  };

  const columns = [
    {
      title: '年份',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '描述',
      dataIndex: 'details',
      key: 'details',
    },
  ];
  return (
    <div className="App">
      <Button type="primary" onClick={() => setNumber((v) => v - 1)}>
        -
      </Button>
      <div>{number}</div>
      <Button type="primary" onClick={() => setNumber((v) => v + 1)}>
        +
      </Button>
      <ReactECharts option={option} />
      <Table rowKey={'key'} dataSource={data} columns={columns} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.mxnzp.com/api/history/today?type=1&app_id=rgihdrm0kslojqvm&app_secret=WnhrK251TWlUUThqaVFWbG5OeGQwdz09`,
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.data || [],
    }, // will be passed to the page component as props
  };
}

export default Home;
