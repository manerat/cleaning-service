import Summarytool from "./Summarytool"
import {Row , Col , Card , Typography , Form ,Radio, Collapse ,Button} from "antd"
import { Input } from "antd"
import { Divider } from "antd"
import { Select } from "antd"
import { Checkbox } from "antd"
const Payment = () =>{
    return (<Row gutter={[2,2]} style={{display : 'flex'  , justifyItems : 'center' , justifyContent : 'center' , minHeight : '100vh'}}>
         <Col xl={8} md={12} >
            <Card bordered style={{minHeight : '50em'}}>
                <div style={{display : 'flex'  , justifyItems : 'center' , justifyContent : 'center' , flexDirection : 'column' , width : '100%'}}>
                    <Typography.Paragraph style={{fontSize : '2em' }} >ยืนยันและชำระเงิน</Typography.Paragraph>
                </div>
                <Form layout="vertical" size="large">
                    <Form.Item label="ชื่อ-สกุล" style={{ fontWeight: 'bold' }}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="เบอร์โทร (ไม่ต้องใส่ขีด)" style={{ fontWeight: 'bold' }}>
                        <Input/>
                    </Form.Item>
                    <Divider/>
                    <Form.Item label="ที่อยู่" style={{ fontWeight: 'bold' }}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label="จังหวัด" style={{ fontWeight: 'bold' }}>
                       <Select/>
                    </Form.Item>
                    <Form.Item label="เขต/อำเภอ" style={{ fontWeight: 'bold' }}>
                       <Select/>
                    </Form.Item>
                    <Form.Item label="แขวง/ตำบล (ระบุหรือไม่ก็ได้)" style={{ fontWeight: 'bold' }}>
                       <Select/>
                    </Form.Item>
                    <Divider/>
                    <Form.Item label="หมายเหตุ - เงื่อนไขการเข้าที่พัก หรือพื้นที่ที่อยากให้เน้นเป็นพิเศษ" style={{ fontWeight: 'bold' }}>
                       <Input.TextArea/>
                    </Form.Item>
                    <Form.Item label={<b>ที่พักของคุณมีสัตว์เลี้ยงหรือไม่ (หากมีโปรดระบุ)</b>}>
                        <Radio.Group>
                            <Radio value="1">ใช่</Radio>
                            <Radio value="2">ไม่</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="กรอกรายละเอียดสัตว์เลี้ยงของคุณ"/>
                    </Form.Item>
                    <Typography.Paragraph style={{fontWeight:'bold'}} >ข้อมูลเพิ่มเติมเกี่ยวกับ Covid-19</Typography.Paragraph>
                    <Card>
                        <Typography.Paragraph style={{ fontWeight:'bold'}} >เพื่อเป็นข้อมูลในการเตรียมความพร้อมของผู้ให้บริการ สำหรับป้องกันการระบาดของ Covid-19 โปรดให้ข้อมูลเพิ่มเติม</Typography.Paragraph>
                        <Form.Item label={<b>Q: สถานที่ใช้บริการ มีผู้ป่วยโควิดหรืออยู่ในระหว่างเฝ้าดูอาการหรือไม่</b>}>
                        <Radio.Group>
                            <Radio value="1">ใช่</Radio>
                            <Radio value="2">ไม่</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Divider/>
                    <Typography.Paragraph style={{fontWeight:'bold'}} >เกี่ยวกับผู้ให้บริการที่ได้รับวัคซีน</Typography.Paragraph>
                        <Form.Item>
                            <Radio value="1">เกี่ยวกับผู้ให้บริการที่ได้รับวัคซีน</Radio>
                    </Form.Item>
                    <Typography.Paragraph style={{fontWeight:'bold'}} >หมายเหตุ: หากในวัน-เวลาที่จองบริการไม่มีผู้ให้บริการที่ตรงเงื่อนไข เจ้าหน้าที่จะติดต่อท่าน เพื่อสอบถามวัน-เวลานัดหมายใหม่อีกครั้ง</Typography.Paragraph>
                    </Card>
                </Form>
                <br/>
                <Typography.Paragraph style={{fontWeight:'bold'}} >บริการพิเศษ</Typography.Paragraph>
                <Card>
                <Form.Item>
                    <Radio.Group style={{display : 'flex' , flexDirection : 'column' , width : '100%'}}>
                        <Radio value="1">addon</Radio>
                        <Radio value="2">addon</Radio>
                    </Radio.Group>
                </Form.Item>
                </Card>
                <br/>
                <Card>
                    <Typography.Paragraph style={{fontWeight:'bold'}} >วิธีชำระเงิน</Typography.Paragraph>
                </Card>
                <Divider/>
                   <Collapse defaultActiveKey={"1"}>
                        <Collapse.Panel header={<b>เงื่อนไขการบริการ</b>} key="1">
                            <ul>
                                <li>ท่านรับทราบและยืนยันว่า ท่านจะไม่ทิ้งทรัพย์สินมีค่า (เช่นเงินสด,เครื่องประดับ) ไว้ในพื้นที่รับบริการ</li>
                                <li>บริษัทไม่รับผิดชอบต่อการสูญหายของทรัพย์สินในพื้นที่รับบริการ</li>
                                <li>ลักษณะการให้บริการของคุณแม่บ้าน เป็นการทำความสะอาดทั่วไป (หากท่านต้องการทำความสะอาดหลังงานก่อสร้าง หรือ การทำความสะอาดใหญ่ กรุณาเลือกใช้บริการ Big Cleaning ของเรา)</li>
                            </ul>
                        </Collapse.Panel>
                   </Collapse>
                   <br/>
                    <Collapse defaultActiveKey={"1"}>
                        <Collapse.Panel header={<b>นโยบายการยกเลิก และการคืนเงิน</b>} key="1">
                            <Form.Item>
                                <Checkbox>ฉันยอมรับ เงื่อนไขการให้บริการ และ นโยบายการยกเลิก</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Checkbox>ฉันยอมรับ เงื่อนไขการให้บริการในช่วงสถานการณ์การแพร่ระบาดโรค Covid-19</Checkbox>
                            </Form.Item>
                        </Collapse.Panel>
                    </Collapse>
                    <br/>
                <Button type="primary" block>ยืนยันการจอง</Button>
                <Button type="link" block>ย้อนกลับ</Button>
            </Card>
         </Col>
         <Summarytool/>
    </Row>)
}

export default Payment