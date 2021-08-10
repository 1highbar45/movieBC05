import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { GROUPID } from '../../../../util/settings/config';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../../redux/actions/QuanLyPhimAction';

const AddNew = () => {
    const [componentSize, setComponentSize] = useState('default');

    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: 0,
            hinhAnh: {},

        },
        onSubmit: (values) => {
            console.log('values', values);
            values.maNhom = GROUPID;
            //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
            let formData = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    formData.append('File', values.hinhAnh, values.hinhAnh.name);
                }
            }
            //Gọi api gửi các giá trị formdata về backend xử lý
            dispatch(themPhimUploadHinhAction(formData));
        }
    })

    const handleChangeDatePicker = (value) => {
        // console.log('datepickerchange', moment(value).format);
        let ngayKhoiChieu = moment(value).format('DD/MM/YYYY');
        formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
    }

    const handleChangeSwitch = (name) => {
        return (value) => {
            formik.setFieldValue(name, value)
        }
    }

    const handleChangeInputNumber = (name) => {
        return (value) => {
            formik.setFieldValue(name, value);
        }
    }

    const [imgSrc, setImgSrc] = useState('');
    const handleChangeFile = (e) => {
        //Lấy file ra từ e
        let file = e.target.files[0];
        if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png') {
            //Tạo đối tượng để đọc file
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImgSrc(e.target.result);//Hình base 64
            }
            //Đem dữ liệu file lưu vào formik
            formik.setFieldValue('hinhAnh', file);
        }
    }

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <>
            <Form
                onSubmitCapture={formik.handleSubmit}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <h3>Add New Film</h3>
                {/* <Form.Item label="Form Size" name="size">
                    <Radio.Group>
                        <Radio.Button value="small">Small</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="large">Large</Radio.Button>
                    </Radio.Group>
                </Form.Item> */}
                <Form.Item label="Film Name">
                    <Input name="tenPhim" name="tenPhim" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Trailer">
                    <Input name="trailer" name="trailer" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Description">
                    <Input name="moTa" name="moTa" onChange={formik.handleChange} />
                </Form.Item>

                <Form.Item label="Opening day">
                    <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
                </Form.Item>

                <Form.Item label="Showing Now" >
                    <Switch onChange={handleChangeSwitch('dangChieu')} />
                </Form.Item>

                <Form.Item label="Coming Soon">
                    <Switch onChange={handleChangeSwitch('sapChieu')} />
                </Form.Item>

                <Form.Item label="Hot">
                    <Switch onChange={handleChangeSwitch('hot')} />
                </Form.Item>

                <Form.Item label="Star">
                    <InputNumber onChange={handleChangeInputNumber('danhGia')} min={1} max={10} />
                </Form.Item>

                <Form.Item label="Image">
                    <input type="file" onChange={handleChangeFile} accept="image/png, image/jpeg,image/gif,image/png" />
                    <br />
                    <img style={{ width: 150, height: 150 }} src={imgSrc} alt="..." />
                </Form.Item>

                <Form.Item label="Action">
                    <button type="submit" className="bg-blue-500 text-white p-2">Add Film</button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AddNew