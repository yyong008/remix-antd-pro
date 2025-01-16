import { Alert, Card, List, Space } from "antd";
import { PageContainer, ProCard } from "@ant-design/pro-components";

import { antdGrid } from "~/config/antd-grid";
import type { loader } from "./loader";
import { useLoaderData } from "react-router";

export function Route() {
  const { data, op_data } = useLoaderData<typeof loader>();
  return (
    <PageContainer>
      <ProCard>
        <Space direction="vertical">
          <Alert
            description="作为程序员，长时间进行电脑工作和缺乏身体活动可能导致一些与睡眠相关的常见问题。以下是一些与睡眠相关的常见问题："
            type="warning"
            showIcon
          />
          <List
            grid={antdGrid}
            dataSource={data}
            renderItem={(item: any) => (
              <List.Item>
                <Card title={item.title} style={{ minHeight: "200px" }}>
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
          <Alert
            description="为了改善睡眠质量和预防睡眠相关问题，程序员可以尝试以下策略："
            type="warning"
            showIcon
          />
          <List
            grid={antdGrid}
            dataSource={op_data}
            renderItem={(item: any) => (
              <List.Item>
                <Card title={false} style={{ minHeight: "130px" }}>
                  {item.content}
                </Card>
              </List.Item>
            )}
          />
        </Space>
      </ProCard>
    </PageContainer>
  );
}
