"use client"
import { Form, Button, Input, Modal, Select, DatePicker } from 'antd'

import React, { useState } from 'react'
import {
    PlusOutlined
} from '@ant-design/icons';
const { TextArea } = Input;
const { RangePicker } = DatePicker;
export default function ProjectHeader() {
    const [open, setOpen] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    };


    return (
        <>

            <Modal
                title="Create a new Project"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={600}
                footer={null}
            >
                <Form
                    name="basic"
                    layout="vertical"

                    style={{
                        maxWidth: 600,
                    }}

                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        className='mb-2'
                        label="Project name"
                        name="project_name"
                        rules={[
                            {
                                required: true,
                                message: 'Project name is required!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item className='mb-2' label="Description" name="description" rules={[
                        {
                            required: true,
                            message: 'Description is required!',
                        },
                    ]}>
                        <TextArea rows={4} />
                    </Form.Item>
                    <div className='grid grid-cols-2 gap-3 items-center w-full'>
                        <Form.Item className='mb-2' label="Status" name="status" >
                            <Select
                                showSearch
                                className='w-full'
                                placeholder="Status"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'inProgress',
                                        label: 'In Progress',
                                    },
                                    {
                                        value: 'review',
                                        label: 'Review',
                                    },
                                    {
                                        value: 'completed',
                                        label: 'Completed',
                                    },
                                ]}
                            />
                        </Form.Item>
                        <Form.Item className='mb-2' label="Priority" name="priority" >
                            <Select
                                showSearch
                                className='w-full'
                                placeholder="Priority"
                                optionFilterProp="children"
                                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                                filterSort={(optionA, optionB) =>
                                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'low',
                                        label: 'Low',
                                    },
                                    {
                                        value: 'medium',
                                        label: 'Medium',
                                    },
                                    {
                                        value: 'high',
                                        label: 'High',
                                    },
                                ]}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item className='mb-2' label="Assign" name="assign" >
                        <Select
                            mode="multiple"
                            className='w-full'
                            placeholder="Select member"


                            options={[
                                {
                                    label: 'Name 1',
                                    value: 'name1',
                                },
                                {
                                    label: 'Name 2',
                                    value: 'name2',
                                },
                                {
                                    label: 'Name 3',
                                    value: 'name3',
                                },
                            ]}

                        />
                    </Form.Item>
                    <div className='grid grid-cols-2 gap-3 items-center w-full'>



                        <Form.Item className='mb-2' label="Start Date" name="start_date" >
                            <DatePicker className='w-full' />
                        </Form.Item>
                        <Form.Item className='mb-2' label="End Date" name="end_date" >
                            <DatePicker className='w-full' />
                        </Form.Item>
                    </div>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                </Form>
            </Modal>
            <div className='rounded-lg bg-white  shadow-lg p-3 pt-3'>
                <div className='flex w-full  flex-wrap justify-between "'>

                    <Button type="primary" htmlType="button" className=" flex items-center h-[50px]" onClick={() => setOpen(true)}>
                        <PlusOutlined /> <span>Add Project</span>
                    </Button>

                    <div className='   flex '>
                        <Input placeholder='Search' />
                    </div>
                </div>
            </div>
        </>
    )
}
