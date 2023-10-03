"use client";

import { Button, Table } from "antd";
import React from "react";

const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      // sorter: true,
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} type="primary" danger>
            x
          </Button>
        );
      },
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "Mike",
      age: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {};

  const paginationConfig = {
    pageSize: 5,
    total: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    onChange: onPaginationChange,
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
  };

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default UMTable;
