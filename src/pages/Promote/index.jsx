
import { Row, Col, Card, Typography , List } from 'antd'
const Promotion = () => {
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
                        <Typography.Paragraph style={{ textAlign: 'center', fontSize: '2em' }} >โปรโมชั่น</Typography.Paragraph>
                    </div>
                    <List
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                </Card>
            </Col>
        </Row>
    )
}
export default Promotion