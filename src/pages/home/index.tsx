import ReactECharts from 'echarts-for-react';
import { FC } from 'react';

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

  return (
    <div className="App">
      <ReactECharts option={option} />
    </div>
  );
};

export default Home;
