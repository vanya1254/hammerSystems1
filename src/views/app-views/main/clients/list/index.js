import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import ClientView from "./ClientView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import clientData from "assets/data/user-list.data.json";

export class List extends Component {
  state = {
    clients: clientData,
    clientProfileVisible: false,
    selectedClient: null,
  };

  deleteClient = (clientId) => {
    this.setState({
      clients: this.state.clients.filter((item) => item.id !== clientId),
    });
    message.success({ content: `Deleted client ${clientId}`, duration: 2 });
  };

  showClientProfile = (clientInfo) => {
    this.setState({
      clientProfileVisible: true,
      selectedClient: clientInfo,
    });
  };

  closeClientProfile = () => {
    this.setState({
      clientProfileVisible: false,
      selectedClient: null,
    });
  };

  render() {
    const { clients, clientProfileVisible, selectedClient } = this.state;

    const tableColumns = [
      {
        title: "Client",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={record.img}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => {
            a = a.name.toLowerCase();
            b = b.name.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Role",
        dataIndex: "role",
        sorter: {
          compare: (a, b) => a.role.length - b.role.length,
        },
      },
      {
        title: "Last online",
        dataIndex: "lastOnline",
        render: (date) => (
          <span>{moment.unix(date).format("MM/DD/YYYY")} </span>
        ),
        sorter: (a, b) =>
          moment(a.lastOnline).unix() - moment(b.lastOnline).unix(),
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status) => (
          <Tag
            className="text-capitalize"
            color={status === "active" ? "cyan" : "red"}
          >
            {status}
          </Tag>
        ),
        sorter: {
          compare: (a, b) => a.status.length - b.status.length,
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showClientProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteClient(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Table columns={tableColumns} dataSource={clients} rowKey="id" />
        <ClientView
          data={selectedClient}
          visible={clientProfileVisible}
          close={() => {
            this.closeClientProfile();
          }}
        />
      </Card>
    );
  }
}

export default List;
