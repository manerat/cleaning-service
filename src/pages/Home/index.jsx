import { Button, Radio, Typography, Space, Input } from "antd"
import { DatePicker } from "antd"
import { Divider } from "antd"
import { Calendar } from "antd"
import { TimePicker } from "antd"
import { Select } from "antd"
import { Row, Col, Card, Form } from "antd"
import { useEffect } from "react"
import { useState } from "react"
import dayjs from "dayjs"
import API from "../../API"
import { MinusCircleOutlined } from '@ant-design/icons'

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};

const Home = () => {
    const [form] = Form.useForm();
    const [orderData, setOrderdata] = useState([]);
    const [masterArea, setMasterArea] = useState([]);
    const [tempData, setTempdata] = useState([]);
    const [rentType, setrentType] = useState("1")
    const [price, setPrice] = useState(0)
    const [promotion, setPromotion] = useState();
    const [rentch, setRentch] = useState("1");
    useEffect(() => {
        API.get('getData').then((res) => {
            const datanoId = res?.data?.data?.filter((e) => !e._id)
            const rawData = datanoId?.map((e) => {
                return {
                    label: e.service,
                    value: e.id,
                    type: e.order_type
                }
            })

            const masterAreaData = res?.data?.masterArea?.map((e) => {
                return {
                    label: e.area_size,
                    value: e.id
                }
            })

            const masterPromotions = res?.data?.masterPromotion?.map((e) => {
                return {
                    label: e.name_promotion,
                    value: e.id
                }
            })

            setMasterArea(masterAreaData)
            setTempdata(datanoId)
            setOrderdata(rawData)
            setPromotion(masterPromotions)
        })
    }, []);

    const onAreaChange = (e, i) => {
        //console.log(e, i)
        const newData = tempData?.filter((e) => e.area_size.includes(i.label)).map((e) => {
            return {
                label: e.service,
                value: e.id,
                type: e.order_type
            }
        })
        setOrderdata(newData)
    }

    const onRentTypeChange = (e) => {
        //console.log(e.target.value)
        setrentType(e.target.value)
    }

    const onTimeChange = (e) => {
        const data = tempData?.find((_e) => _e.id === e);
        //console.log(data)
        form.setFieldValue('price', data?.price)
        setPrice(data?.price)
    }

    const handleChange = () => {
        form.setFieldsValue({
            sights: [],
        });
    };

    const onRentChange = (e) => {
        //console.log(e.target.value)
        setRentch(e.target.value)
    }

    const [formType, setFormType] = useState("ครั้งเดียว")
    return (<Row style={{ display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Col xl={8} md={12} >
            <Card bordered style={{ minHeight: '50em' }}>
                <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                    <Typography.Paragraph style={{ textAlign: 'center' , fontSize : '2em' }} >จองบริการ</Typography.Paragraph>
                    <Typography.Paragraph style={{ textAlign: 'center' }}>(เลื่อนลงเพื่อดูขอบเขตการให้บริการ)</Typography.Paragraph>
                </div>
                <Typography.Paragraph style={{ fontWeight: 'bold' }}>คุณต้องการทำความสะอาดบ่อยแค่ไหน</Typography.Paragraph>
                <Row gutter={[2, 2]} style={{ marginBottom: '2em' }}>
                    <Col span={12}>
                        <Card onClick={() => setFormType("ครั้งเดียว")} className={`${formType === 1 && 'active'} select-promotion`} style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>พื้นฐาน</Card>
                    </Col>
                    <Col span={12}>
                        <Card onClick={() => setFormType("จองแบบหลายวัน")} className={`${formType === 2 && 'active'} select-promotion`} style={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>แพ็กเกจ</Card>
                    </Col>
                </Row>
                {formType === "ครั้งเดียว" ?

                    <Form layout="vertical" size="large" form={form}>
                        <Form.Item label="กรุณาเลือกประเภทที่พัก เพื่อให้เราช่วยคุณประเมินระยะเวลาทำความสะอาด และค่าบริการ" style={{ fontWeight: 'bold' }}>
                            <Select options={masterArea} onChange={onAreaChange} />
                        </Form.Item>
                        <Form.Item label="บริการ (ชั่วโมง)" style={{ fontWeight: 'bold' }}>
                            <Select options={orderData} onChange={onTimeChange} />
                        </Form.Item>
                        <Form.Item label={<b>เลือกประเภทการจอง</b>} >
                            <Radio.Group onChange={onRentTypeChange} defaultValue={"1"} >
                                <Radio value="1" >จองแบบเลือกวันและเวลาทันที</Radio>
                                <Radio value="2">จองแบบยังไม่ระบุวันและเวลา</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {rentType === "1" &&
                            <Form.Item label="คุณต้องการใช้บริการนี้เมื่อไหร่" style={{ fontWeight: 'bold' }}>
                                <Space>
                                <DatePicker
                                    format="DD-MM-YYYY"
                                    disabledDate={(currdate) => {
                                        //console.log(dayjs().endOf('day'))
                                        return currdate && currdate < dayjs().subtract(1, 'day').endOf('day');
                                    }}
                                />
                               
                                <TimePicker 
                                    disabledTime={(now) => {

                                        return {
                                            disabledHours: () => {
                                                const hour = []
                                                for (let i = 0; i < now.hour(); i += 1) hour.push(i)
                                                return hour
                                            },
                                            disabledMinutes: (selectH) => {
                                                const mins = []
                                                if (selectH === now.hour()) {
                                                    for (let i = 0; i < now.minute(); i += 1) mins.push(i)
                                                }
                                                return mins
                                            }
                                        }
                                    }}
                                />
                                </Space>
                            </Form.Item>
                        }
                        <Divider />
                        <Form.Item name="price">
                            <div style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }}>
                                <Typography.Paragraph style={{ textAlign: 'left' , fontWeight: 'bold'}} >ค่าบริการ (ยังไม่รวมภาษี)</Typography.Paragraph>
                                <Typography.Paragraph style={{ textAlign: 'right' }} >{price.toLocaleString("th-TH", {style:"currency", currency:"THB"})}</Typography.Paragraph>
                            </div>
                        
                        </Form.Item>
                        <Button type="primary" block>ถัดไป</Button>
                    </Form>
                    :
                    <Form layout="vertical" size="large" form={form}>
                        {rentch === "1" &&
                        
                        <Card title="โปรโมชันแพ็กเกจ">
                            <ul>
                                {promotion?.map((e) => {
                                    return <li>{e.label}</li>
                                })

                                }
                            </ul>
                        </Card>
                        }
                        <br/>
                        <Form.Item label="กรุณาเลือกประเภทที่พัก เพื่อให้เราช่วยคุณประเมินระยะเวลาทำความสะอาด และค่าบริการ" style={{ fontWeight: 'bold' }}>
                            <Select options={masterArea} onChange={onAreaChange} />
                        </Form.Item>
                        <Form.Item label="บริการ (ชั่วโมง)" style={{ fontWeight: 'bold' }}>
                            <Select options={orderData} onChange={onTimeChange} />
                        </Form.Item>
                        <Form.Item label={<b>เลือกประเภทการจอง</b>}>
                            <Radio.Group onChange={onRentChange} defaultValue={"1"}>
                                <Radio value="1" >จองแบบเลือกวันและเวลาทันที</Radio>
                                <Radio value="2" >จองแบบยังไม่ระบุวันและเวลา</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {rentch === "1" ?
                            <Form.List name="dates"  label="คุณต้องการใช้บริการนี้เมื่อไหร่">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map((field) => (
                                            <Space key={field.key} align="baseline" >
                                                <Form.Item style={{ fontWeight: 'bold' }}
                                                    {...field}
                                                    label="วันที่"
                                                    name={[field.name, 'date']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'กรุณาเลือกวันที่',
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker  format="DD-MM-YYYY"
                                                        disabledDate={(currdate) => {
                                                        //console.log(dayjs().endOf('day'))
                                                        return currdate && currdate < dayjs().subtract(1, 'day').endOf('day');
                                                    }} />
                                                </Form.Item>
                                                <Form.Item style={{ fontWeight: 'bold' }}
                                                    {...field}
                                                    label="เวลา"
                                                    name={[field.name, 'time']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'กรุณาเลือกเวลา',
                                                        },
                                                    ]}
                                                >
                                                   <TimePicker 
                                                    disabledTime={(now) => {

                                                        return {
                                                            disabledHours: () => {
                                                                const hour = []
                                                                for (let i = 0; i < now.hour(); i += 1) hour.push(i)
                                                                return hour
                                                            },
                                                            disabledMinutes: (selectH) => {
                                                                const mins = []
                                                                if (selectH === now.hour()) {
                                                                    for (let i = 0; i < now.minute(); i += 1) mins.push(i)
                                                                }
                                                                return mins
                                                            }
                                                        }
                                                }}/>
                                                </Form.Item>

                                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                                            </Space>
                                        ))}

                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block>
                                                เลือกวันที่และเวลา
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                            :
                            <Form.Item label="จำนวนแพ็กเกจที่คุณต้องการ">
                            <Select options={promotion}/>
                        </Form.Item>
                    }
                        <Divider />
                        <Form.Item name="price">
                            <div style={{ display: 'flex',justifyContent:'space-between',alignItems:'center' }}>
                                <Typography.Paragraph style={{ textAlign: 'left' , fontWeight: 'bold'}} >ค่าบริการ (ยังไม่รวมภาษี)</Typography.Paragraph>
                                <Typography.Paragraph style={{ textAlign: 'right' }} >{price.toLocaleString("th-TH", {style:"currency", currency:"THB"})}</Typography.Paragraph>
                            </div>
                           </Form.Item>
                        <Button type="primary" block>ถัดไป</Button>
                    </Form>
                }
            </Card>
        </Col>
    </Row>)
}

export default Home