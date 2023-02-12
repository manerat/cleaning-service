import { Col , Card , Typography , Divider , Form , Select} from "antd"
const Summarytool = () => {
    return (<Col xl={8} md={12}>
        <div style={{width : '100%'}}>
            <Card bordered style={{minHeight : '50em' , position : 'fixed'}}>
                <div style={{display : 'flex'  , justifyItems : 'center' , justifyContent : 'center' , flexDirection : 'column' , width : '100%'}}>
                    <Typography.Paragraph style={{fontSize : '2em'}} >สรุปการจอง</Typography.Paragraph>
                    <Typography.Paragraph>กรุงเทพ และปริมณฑล - บริการทำความสะอาด</Typography.Paragraph>
                    <Typography.Paragraph>2 ชม.</Typography.Paragraph>
                    <Typography.Paragraph>แพ็กเกจหรือครั้งเดียว</Typography.Paragraph>
                    <Typography.Paragraph>วันที่และเวลา</Typography.Paragraph>
                </div>
                <Divider/>
                <Form.Item label="ส่วนลด" style={{ fontWeight: 'bold' }}>
                    <Select/>
                </Form.Item>
                <Divider/>
                <Typography.Paragraph style={{ fontWeight: 'bold' }} >รายละเอียดการชำระเงิน</Typography.Paragraph>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
                    <Typography.Paragraph>รวม</Typography.Paragraph>
                    <Typography.Paragraph>฿200</Typography.Paragraph>
                </div>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
                    <Typography.Paragraph>ส่่วนลด</Typography.Paragraph>
                    <Typography.Paragraph>฿200</Typography.Paragraph>
                </div>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
                    <Typography.Paragraph>ภาษีมูลค่าเพิ่ม 7%</Typography.Paragraph>
                    <Typography.Paragraph>฿100</Typography.Paragraph>
                </div>
                <div style={{display : 'flex' , justifyContent : 'space-between' , alignItems : 'center'}}>
                    <Typography.Paragraph style={{fontWeight: 'bold'}} >รวมทั้งสิ้น</Typography.Paragraph>
                    <Typography.Paragraph style={{fontWeight: 'bold'}} >฿100</Typography.Paragraph>
                </div>
            </Card>
        </div>
     </Col>)
}

export default Summarytool