'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Sidebar_Component() {
  return (
    <Sidebar aria-label="Default sidebar example" className='h-screen'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to={'/dashboard'}>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          </Link>
<Link to={':id/addbook'}><Sidebar.Item href="#" icon={HiUser}>
            Add Book
          </Sidebar.Item></Link>
          
          <Link to={':id/managebook'}><Sidebar.Item href="#" icon={HiShoppingBag}>
            Manage Books
          </Sidebar.Item></Link>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
