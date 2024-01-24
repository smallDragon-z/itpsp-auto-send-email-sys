import { Button, Table } from 'antd';
import ReactECharts from 'echarts-for-react';
import { FC, useState } from 'react';

import LayoutCom from '@/components/LayoutCom';

interface DataProps {
  year: string;
  title: string;
  desc: string;
  link: string;
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
      key: 'name',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'age',
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'address',
    },
  ];
  return (
    <LayoutCom>
      <div className="App">
        <Button type="primary" onClick={() => setNumber((v) => v - 1)}>
          -
        </Button>
        <div>{number}</div>
        <Button type="primary" onClick={() => setNumber((v) => v + 1)}>
          +
        </Button>
        <ReactECharts option={option} />
        <Table dataSource={data} columns={columns} />
      </div>
    </LayoutCom>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://api.oioweb.cn/api/common/history`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data.result || [],
    }, // will be passed to the page component as props
  };
}

export default Home;
