import { Input, message, Button, Form, Select, Divider, Checkbox } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import { Row, Col } from 'react-bootstrap';
import './page.css'
import { AiOutlineCamera, AiFillYoutube } from "react-icons/ai";
import { MdMyLocation } from "react-icons/md";
import { DatePicker } from 'antd';
import { CourtCategory, CreateLawyer, ExpList, languageList } from '../service/api_services';

function UpdateLawyer() {

    const [form] = Form.useForm();
    const [upAdhar,setUpAdhar]=useState("")
    const [barRegImg, setBarRegImg] = useState([])
    const [barCerImg, setbarCerImg] = useState([])
    const [adhar, setAdhar] = useState([])
    const [exp, setExp] = useState("")
    const [lang, setLang] = useState([])
    const [catList, setCatList] = useState([])
    const [cat, setCat] = useState("")
    const [userInput, setUserInput] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
        firstLineAddress: "",
        secondLineAddress: "",
        country: "",
        state: "",
        district: "",
        pincode: "",
        barCertificateNo: "",
        barCertificate: "",
        experiance: "",
        barRegistrationImage: "",
        barCertificateImage: "",
        aadhar: "",
    })

    const lawBody = {
        fullname: userInput.fullname,
        phone: userInput.phone,
        email: userInput.email,
        password: userInput.password,
        firstLineAddress: userInput.firstLineAddress,
        secondLineAddress: userInput.secondLineAddress,
        country: userInput.country,
        state: userInput.state,
        language : lang,
        category : cat,
        district: userInput.district,
        pincode: userInput.phone,
        barCertificateNo: userInput.barCertificateNo,
        barCertificate: userInput.barCertificate,
        experiance: exp,
        barRegistrationImage: barRegImg,
        barCertificateImage: barCerImg,
        aadhar: adhar,
    }

    console.log(lawBody)

    const handleChange = (propertyName) => (event) => {
        setUserInput((userInput) => ({
            ...userInput, [propertyName]: event.target.value
        }))
    }
    const onReset = () => {
        form.resetFields();
    };






    const onFinish = async () => {
        await CreateLawyer(lawBody).then(res => {
            console.log('create lawyer', res);
            //     if (res.data.success) {
            //         message.success(res.data.msg);
            //         handleCancel()
            //         onReset()
            //     }
            // }).catch(err => {
            //     message.error(err.data.msg);

            // 
        }
        )
    }


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const barRegHandler = (e) => {
        setBarRegImg(e.target.files[0]);
        console.log(URL.createObjectURL(e.target.files[0]));
        console.log("UploadImg", e.target.files[0]);

    }
    const barCerHandler = (e) => {
        setbarCerImg(e.target.files[0]);
        console.log(URL.createObjectURL(e.target.files[0]));
        console.log("UploadImg", e.target.files[0]);

    }
    const adharhandler = (e) => {
        setUpAdhar(e.target.files[0]);
        console.log(URL.createObjectURL(e.target.files[0]));
        console.log("UploadImg", e.target.files[0]);

    }
    const uploadAharImg = async () => {
        const fd = new FormData();
        fd.append('image', upAdhar)
        console.log("upadhar", fd)
        setAdhar(fd)  
    }

    useEffect(() => {
        upAdhar != "" && uploadAharImg()
    }, [upAdhar])

    // const uploadimageClick =  () => {
    //     const fd = new FormData();
    //     fd.append('image', uploadImg)
    //     //  UploadUserImage(fd).then(res => {
    //     //     if (res.data.success) {
    //     //         setImageId(res.data.extras.ImageID)
    //     //     }
    //     // }).catch(err => {
    //     //     message.error(err.response.data.extras.msg);
    //     // })
    //     console.log(fd)
    // }


    // useEffect(() => {
    //     uploadImg != "" && uploadimageClick()
    // }, [uploadImg])



    // useEffect(() => {
    //     if (focusInput.current) {
    //         focusInput.current.focus();
    //     }
    // }, [focusInput]);

    const cancelhandle = () => {
        onReset()
    }



    const CoutCategoryList = async () => {
        await CourtCategory().then(res => {
            console.log('category', res);
            if (res.status == 200) {
                setCatList(res.data.data)
            }
        }).catch(err => {
            message.error(err.data.msg);

        })
    }
    useEffect(() => {
        CoutCategoryList()
    }, [])

    const handlecategory = (value) => {
        setCat(value)
        console.log(value)
    }

    const handleLanguage = (value) => {
        console.log(value)
        setLang(value)
    }
    const handleExperinece = (value) => {
        console.log(value)
        setExp(value)
    }

    return (
        <div>

            <Form
                form={form}
                name="addLayer"
                className="add"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>

                    <Col md={6}>
                        <Form.Item
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event Title !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Full Name"
                                value={userInput.fullname}
                                onChange={handleChange("fullname")}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event_Description !',
                                },

                            ]}
                        >
                            <Input
                                placeholder="Phone No "
                                value={userInput.phone}
                                onChange={handleChange("phone")}
                            // ref={focusInput}


                            />

                        </Form.Item>
                    </Col>
                </Row>
                <Row>

                    <Col md={6}>

                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event_Description !',
                                },

                            ]}
                        >
                            <Input
                                placeholder="Email "
                                value={userInput.email}
                                onChange={handleChange("email")}
                            // ref={focusInput}


                            />

                        </Form.Item>
                    </Col>
                    <Col md={6}>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event_Description !',
                                },

                            ]}
                        >
                            <Input
                                placeholder="Password "
                                value={userInput.email}
                                onChange={handleChange("password")}
                            // ref={focusInput}


                            />

                        </Form.Item>
                    </Col>
                </Row>


                {/* <Row>
                    <Col md={6}>

                        <Form.Item
                            name="Event Mode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event Mode !',
                                },

                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Event Mode"
                                optionFilterProp="children"
                                onChange={EventModeHandle}
                                allowClear={true}
                            >
                                {Event_Mode_List.map((option) => (
                                    <Select.Option key={option.key} value={option.key} label={option.values}>
                                        {option.values}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>

                    
                </Row> */}
                <Col md={12}>
                    <Form.Item
                        name="firstLineAddress"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Event_Venue !',
                            },
                        ]}
                    >
                        <Input.TextArea
                            placeholder="Address Line 1"
                            value={userInput.firstLineAddress}
                            onChange={handleChange("firstLineAddress")}

                        />

                    </Form.Item>
                </Col>
                <Col md={12}>
                    <Form.Item
                        name="secondLineAddress"
                        rules={[
                            {
                                required: true,
                                message: 'Please Enter Event_Venue !',
                            },
                        ]}
                    >
                        <Input.TextArea
                            placeholder="Address Line 2"
                            value={userInput.secondLineAddress}
                            onChange={handleChange("secondLineAddress")}

                        />

                    </Form.Item>
                </Col>






                <Row >
                    <Col md={6}>
                        <Form.Item
                            name="country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Person_Name !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Country"
                                value={userInput.country}
                                onChange={handleChange("country")}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            name="state"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Phone !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="State"
                                value={userInput.state}
                                onChange={handleChange("state")}

                            />

                        </Form.Item>
                    </Col>
                </Row>
                <Row>

                    <Col md={6}>
                        <Form.Item
                            name="district"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Email !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="District"
                                value={userInput.district}
                                onChange={handleChange("district")}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            name="pincode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Email !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="pincode"
                                value={userInput.pincode}
                                onChange={handleChange("pincode")}
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row>

                    <Col md={6}>
                        <Form.Item
                            name="barCertificateNo"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Email !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Bar Certificate No"
                                value={userInput.barCertificateNo}
                                onChange={handleChange("barCertificateNo")}
                            />
                        </Form.Item>
                    </Col>
                    <Col md={6}>
                        <Form.Item
                            name="barCertificate"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Contact_Email !',
                                },
                            ]}
                        >
                            <Input
                                placeholder="Bar Certificate"
                                value={userInput.barCertificate}
                                onChange={handleChange("barCertificate")}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>

                        <Form.Item
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter Event Mode !',
                                },

                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select category"
                                optionFilterProp="children"
                                onChange={handlecategory}
                                allowClear={true}
                                mode='multiple'

                            >
                                {catList.map((option) => (
                                    <Select.Option key={option._id} value={option._id} label={option.name}>
                                        {option.name}
                                    </Select.Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={4}>

                        <Form.Item
                            name="language"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please Enter at least one language !',
                                },

                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Language"
                                optionFilterProp="children"
                                onChange={handleLanguage}
                                allowClear={true}
                                mode="multiple"
                            >
                                {languageList.map((option) => (
                                    <Select.Option key={option.key} value={option.values} label={option.values}>
                                        {option.values}
                                    </Select.Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>
                    <Col md={4}>

                        <Form.Item
                            name="experience"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select Experience !',
                                },

                            ]}
                        >
                            <Select
                                showSearch
                                placeholder="Select Language"
                                optionFilterProp="children"
                                onChange={handleExperinece}
                                allowClear={true}
                            >
                                {ExpList.map((option) => (
                                    <Select.Option key={option.key} value={option.values} label={option.values}>
                                        {option.values}
                                    </Select.Option>
                                ))}

                            </Select>
                        </Form.Item>
                    </Col>

                </Row>

                {/* <Divider /> */}
                <Row>
                    <Col md={4}>

                        <label for="file-input">
                            Bar Register Image
                        </label>
                        <input id="file-input" type="file"
                            onChange={barRegHandler}
                        />

                    </Col>
                    <Col md={4}>

                        <label for="file-input">
                            Bar certificate Image
                        </label>
                        <input id="file-input" type="file"
                            onChange={barCerHandler}
                        />

                    </Col>
                    <Col md={4}>

                        <label for="file-input">
                            aadhar
                        </label>
                        <input id="file-input" type="file"
                            onChange={adharhandler}
                        />

                    </Col>
                </Row>
                <div className="model_footers">


                    <div className="createLawBtn">
                        <Form.Item>
                            <Button
                                onClick={cancelhandle}
                            >
                                Cancel
                            </Button>

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary"
                                htmlType="submit"
                                // onClick={submithandler}
                                className="login-form-button">
                                Create
                            </Button>
                        </Form.Item>
                    </div>
                </div>

            </Form>
        </div>
    )
}



export default UpdateLawyer