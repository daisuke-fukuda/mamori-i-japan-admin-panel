import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Table, Button } from 'antd';
import { I18nContext } from '../../locales';
import { langCode } from '../../constants';
import { ContentContainer } from '../../components/CommonStyles';

const { Title } = Typography;

const dataSource = [
  {
    key: 1,
    id: 1,
    content: 'text text text text text',
    address: 'address code',
    createDate: '2020.04.30',
  },
];

export default () => {
  const history = useHistory();
  const { translate } = useContext(I18nContext);
  const loading = false;
  let columns: any = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'createDate',
      dataIndex: 'createDate',
      key: 'createDate',
    },
  ];

  const handleCreate = () => {
    history.push('/positives/create');
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    columns = columns.map((item: any) => {
      return {
        ...item,
        title: item[`title${langCode}`],
      };
    });
  });

  return (
    <ContentContainer>
      <header>
        <Title level={4}>{translate('list')}</Title>
        <Button type="primary" size="large" onClick={handleCreate}>
          {translate('createItem')}
        </Button>
      </header>

      <section>
        <Table bordered={true} loading={loading} dataSource={dataSource} columns={columns} />
      </section>
    </ContentContainer>
  );
};
