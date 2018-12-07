import { Layout, Menu } from "antd";
import * as React from 'react';
import { Link } from "react-router-dom";
import './NavLeft.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

const menuItems = [
  {
    key: '/',
    title: 'Home',
  },
  {
    key: '/samples',
    subMenus: [
      {
        key: '/samples/login',
        title: 'Login',
      },
      {
        key: '/samples/loginWithExtraButtons',
        title: 'Login With Extra Buttons',
      },
      {
        key: '/samples/js',
        title: 'Long Form',
      },
      {
        key: '/samples/js-with-values',
        title: 'Long Form With Values',
      },
      {
        key: '/samples/json',
        title: 'Long Form with JSON',
      },
      {
        key: '/samples/generator',
        title: 'Form Generator',
      },
      {
        key: '/samples/previewFields',
        title: 'Preview Fields',
      },
    ],
    title: 'Samples',
  }
];

export class NavLeft extends React.Component {

  public render() {

    let selectedRootRoute = '';
    let selectedSubRoute = '';
    if (location) {
      selectedRootRoute = location.pathname.split('/')[1];
      selectedSubRoute = location.pathname;
    }

    return (
      <div className="nav-left">
        <Sider
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
          theme="light"
        >
          <Menu
            className="menu"
            defaultOpenKeys={[selectedRootRoute]}
            defaultSelectedKeys={[selectedSubRoute]}
            mode="inline"
          >
            {menuItems.map(item => (
              item.subMenus
                ? <SubMenu
                  key={item.key}
                  title={item.title}
                >
                  {item.subMenus.map(subMenu => (
                    <Menu.Item key={subMenu.key}>
                      <Link to={subMenu.key}>{subMenu.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
                : <Menu.Item key={item.key}>
                  <Link to={item.key}>{item.title}</Link>
                </Menu.Item>
            ))}

          </Menu>
        </Sider>
      </div>
    )
  }

}
