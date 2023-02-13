import { TimePicker } from 'antd';
import { List } from 'antd';
import { DatePicker } from 'antd';
import { Row, Col, Card, Typography, Form, Space, Divider, Button } from 'antd'

const Check = () => {
    const [form] = Form.useForm();
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return (
        <Row style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <Col xl={8} md={12} >
                <Card bordered style={{ minHeight: '50em' }}>
                    <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                        <Typography.Paragraph style={{ textAlign: 'center', fontSize: '2em' }} >เช็คสถานะการจอง</Typography.Paragraph>
                        <Typography.Paragraph style={{ textAlign: 'center' }}>(เลื่อนลงเพื่อดูขอบเขตการให้บริการ)</Typography.Paragraph>
                    </div>
                    <Form layout="vertical" size="large" form={form}>
                        <Form.Item label="คุณจองวันไหน" style={{ fontWeight: 'bold' }}>
                            <Space>
                                <DatePicker />
                                <TimePicker />
                            </Space>
                        </Form.Item>
                        <Button type="primary" block>เช็คสถานะจอง</Button>
                        <Divider />
                        <Divider orientation="left">
                            <List style={{ display : 'flex',width: '28vw' }}
                                bordered
                                dataSource={data}
                                renderItem={(item) => <List.Item style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }}>
                                    {item}
                                    <button>ยกเลิก</button>
                                    </List.Item>}
                            />
                        </Divider>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Check