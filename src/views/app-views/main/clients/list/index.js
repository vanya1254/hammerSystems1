import React, { Component } from "react";
import { Card, Table, Tag, Tooltip, message, Button } from "antd";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import ClientView from "./ClientView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import clientsService from "services/ClientsService";
import ClientEdit from "./ClientEdit";

export class List extends Component {
  state = {
    clients: [],
    isLoading: true,
    clientProfileVisible: false,
    clientEditVisible: false,
    selectedClient: null,
  };

  componentDidMount() {
    this.getClients();
  }

  getClients = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await clientsService.getPost();

      this.setState({ clients: response, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
      message.error("Failed to get clients");
    }
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

  showClientEdit = (clientInfo) => {
    this.setState({
      clientEditVisible: true,
      selectedClient: clientInfo,
    });
  };

  closeClientEdit = (editedClient) => {
    const newClients = this.state.clients.filter(
      (client) => client.id !== editedClient.id
    );
    newClients.push(editedClient);

    this.setState({
      clients: newClients,
      clientEditVisible: false,
      selectedClient: null,
    });
  };

  render() {
    const {
      clients,
      isLoading,
      clientProfileVisible,
      clientEditVisible,
      selectedClient,
    } = this.state;

    const tableColumns = [
      {
        title: "Client",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              src={`/img/avatars/thumb-${record.id}.jpg`}
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
        title: "Username",
        dataIndex: "username",
        sorter: {
          compare: (a, b) => {
            a = a.username.toLowerCase();
            b = b.username.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => {
            a = a.website.toLowerCase();
            b = b.website.toLowerCase();
            return a > b ? -1 : b > a ? 1 : 0;
          },
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
        render: (phone) => (
          <Tag className="text-capitalize" color={"cyan"}>
            {phone.split(" ")[0]}
          </Tag>
        ),
        sorter: {
          compare: (a, b) => a.phone.length - b.phone.length,
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="Edit">
              <Button
                type="text"
                className="mr-2"
                style={{ backgroundColor: "bisque" }}
                icon={<EditOutlined />}
                onClick={() => this.showClientEdit(elm)}
                size="small"
              />
            </Tooltip>
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
        {clientEditVisible ? (
          <ClientEdit data={selectedClient} close={this.closeClientEdit} />
        ) : (
          <Table
            columns={tableColumns}
            loading={isLoading}
            dataSource={clients}
            rowKey="id"
          />
        )}
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
