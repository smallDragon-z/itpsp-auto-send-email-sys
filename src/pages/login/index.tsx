import { Button, Card } from 'antd';
import { FC, memo } from 'react';
import { useImmer } from 'use-immer';

interface DataProps {
  key: string;
  name: string;
  age: number;
  address: string;
}

type IData = DataProps[];
const Login: FC<IData> = () => {
  const [data, setData] = useImmer([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]);

  const handleAdd = () => {
    setData((draft) => {
      draft.push({
        key: Math.random() * 1000 + '',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      });
    });
  };
  const handleRemoveItem = () => {
    setData((draft) => {
      draft.pop();
    });
  };
  return (
    <>
      <DataList data={data} />
      <Button type="primary" onClick={handleAdd}>
        ADD ONE PERSON
      </Button>
      <Button type="primary" onClick={handleRemoveItem}>
        REMOVE ONE PERSON
      </Button>
    </>
  );
};

const DataList = (props: { data: IData }) => {
  const { data } = props;
  return (
    <div>
      {data.map((item, i) => (
        <DataItem key={item.key} index={i} item={item} />
      ))}
    </div>
  );
};
DataList.displayName = 'DataList';

const DataItem = memo((props: { index: number; item: DataProps }) => {
  const { item, index } = props;
  const [oneItem, setOneItem] = useImmer(item);
  const handleUpdate = () => {
    setOneItem((draft) => {
      draft.name = '胡彦祖2';
    });
  };
  return (
    <Card id={index.toString()} title="Default size card" extra={<a href="#1">More</a>} style={{ width: 300 }}>
      <div onClick={handleUpdate}>{oneItem.name}</div>
      <div>{oneItem.age}</div>
    </Card>
  );
});
DataItem.displayName = 'DataItem';
export default Login;
