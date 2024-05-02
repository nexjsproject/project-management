"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProjectOutlined,
  MacCommandOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Dashboard',
  },
  
  {
    key: '2',
    label: 'Projects',
    icon: <ProjectOutlined />,
    children: [
      {
        key: '3',
        icon: <MacCommandOutlined />,
        label: <Link href='/project' >Project List</Link>,
      },
      {
        key: '4',
        icon: <AppstoreAddOutlined />,
        label: <Link href='/project/add' >Add Project</Link>,
      },
      
    ],
  },
 
];


export default function Sidebar() {

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={
        `absolute left-0 top-0 z-9999 flex h-screen w-[256px] flex-col overflow-y-hidden bg-primary duration-300 ease-linear   lg:static lg:translate-x-0 `
        
      }
    >
 {/* <!-- SIDEBAR HEADER --> */}
 <div className="relative flex w-full items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link className="flex items-center" href="/">
          {/* <Image
            className="h-6 w-6 rounded-md"
            width={400}
            height={400}
            src={"/images/logo/logo-icon.png"}
            alt="Logo"
          /> */}
         
            <h1 className=" ml-2 text-xl font-semibold text-white">
              Admin
            </h1>
      
        </Link>
       
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

   
      <Menu
        // defaultSelectedKeys={['1']}
        // defaultOpenKeys={['2']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        className='bg-primary'
      />

    </aside>
  )
}
