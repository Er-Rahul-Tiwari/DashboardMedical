import React from "react"
import { useRecoilValue } from "recoil"
import { checkbox } from "../../../../atoms/userTable"
import { Table } from "antd"
import "antd/dist/antd.css"
import bank from "../../../../assets/bank.svg"
import cr from "../../../../assets/cr.svg"
import search from "../../../../assets/search.svg"
import avatar from "../../../../assets/memberAvatar.jpg"

const Institution = () => {
  const selectionType = useRecoilValue(checkbox)

  const columns = [
    {
      title: () => {
        return <span className="table__header">Name</span>
      },
      dataIndex: "name",
      render: (text, record) => {
        return (
          <div className="table__box">
            <div className="table__iconBox">
              {/* Active table__svg if img is not available otherwise show img */}
              {/* <img className="table__svg" src={record.image} alt={record.name} /> */}
              <img className="table__img" src={record.image} alt={record.name} />
            </div>

            <div className="table__name">
              <p className="weight-700 cap mb0">{record.name}</p>
              <p className="font-14 lower color-99 mb0">{record.user} users</p>
            </div>
          </div>
        )
      },
      filterMultiple: false,
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">CREDITS USED</span>
      },
      dataIndex: "credits used",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="">{record.creditsUsed}</span>
            <img className="" src={cr} alt="credit icons" />
          </div>
        )
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.creditsUsed - b.creditsUsed,
    },
    {
      title: () => {
        return <span className="table__header">CREDITS LIMITATION</span>
      },
      dataIndex: "credits Limitation",
      render: (text, record) => {
        return (
          <div className="form__group">
            <input className="form__input" value={record.creditsLimitation} />
          </div>
        )
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.creditsLimitation - b.creditsLimitation,
    },
    {
      title: () => {
        return <span className="table__header">role</span>
      },
      dataIndex: "role",
      filterMultiple: false,
      onFilter: (value, record) => record.role.indexOf(value) === 0,
      sorter: (a, b) => a.role.length - b.role.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">job title</span>
      },
      dataIndex: "jobTitle",
      filterMultiple: false,
      onFilter: (value, record) => record.jobTitle.indexOf(value) === 0,
      sorter: (a, b) => a.jobTitle.length - b.jobTitle.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">group</span>
      },
      dataIndex: "group",
      filterMultiple: false,
      onFilter: (value, record) => record.group.indexOf(value) === 0,
      sorter: (a, b) => a.group.length - b.group.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">institution</span>
      },
      dataIndex: "institution",
      filterMultiple: false,
      onFilter: (value, record) => record.institution.indexOf(value) === 0,
      sorter: (a, b) => a.institution.length - b.institution.length,
      sortDirections: ["descend"],
    },
  ]

  const data = [
    {
      key: "0",
      image: `${avatar}`,
      user: 38,
      name: "Institution’s name",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "1",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "2",
      image: `${bank}`,
      user: 38,
      name: "Institution’s name",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "3",
      image: `${avatar}`,
      user: 38,
      name: "Institution’s name",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "4",
      image: `${bank}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "5",
      image: `${avatar}`,
      user: 38,
      name: "Institution’s name",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "6",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "7",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "8",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "9",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "10",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
    {
      key: "11",
      image: `${avatar}`,
      user: 38,
      name: "Disabled User",
      creditsUsed: 23000,
      creditsLimitation: 200,
      role: "Manager",
      group: "Institution's group",
      jobTitle: "Job Title",
      institution: "Company’s name",
    },
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  }
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra)
  }

  return (
    <>
      <div className="tables">
        <div className="table">
          <nav className="table__nav">
            <div className=" form__group">
              <img src={search} className="form__searchSvg" alt="search icon" />
              <input className="form__input form__search" id="" type="" name="" placeholder="Search..." />
            </div>
            <div className="table__rightNav">
              <svg className="notification__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 10.875H17.9062V5.625C17.9062 3.96797 16.5633 2.625 14.9062 2.625H9.09375C7.43672 2.625 6.09375 3.96797 6.09375 5.625V10.875H4.5C4.08516 10.875 3.75 11.2102 3.75 11.625V20.625C3.75 21.0398 4.08516 21.375 4.5 21.375H19.5C19.9148 21.375 20.25 21.0398 20.25 20.625V11.625C20.25 11.2102 19.9148 10.875 19.5 10.875ZM7.78125 5.625C7.78125 4.90078 8.36953 4.3125 9.09375 4.3125H14.9062C15.6305 4.3125 16.2188 4.90078 16.2188 5.625V10.875H7.78125V5.625ZM18.5625 19.6875H5.4375V12.5625H18.5625V19.6875ZM11.3438 16.4297V17.6719C11.3438 17.775 11.4281 17.8594 11.5312 17.8594H12.4688C12.5719 17.8594 12.6562 17.775 12.6562 17.6719V16.4297C12.8497 16.2908 12.9941 16.0941 13.0687 15.8679C13.1432 15.6417 13.1441 15.3977 13.0711 15.1709C12.9982 14.9442 12.8552 14.7465 12.6627 14.6062C12.4702 14.466 12.2382 14.3904 12 14.3904C11.7618 14.3904 11.5298 14.466 11.3373 14.6062C11.1448 14.7465 11.0018 14.9442 10.9289 15.1709C10.8559 15.3977 10.8568 15.6417 10.9313 15.8679C11.0059 16.0941 11.1503 16.2908 11.3438 16.4297Z" />
              </svg>
              <svg className="notification__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 10.875H7.78125V5.625C7.78125 4.90078 8.36953 4.3125 9.09375 4.3125H14.9062C15.6305 4.3125 16.2188 4.90078 16.2188 5.625V7.21875C16.2188 7.32188 16.3031 7.40625 16.4062 7.40625H17.7188C17.8219 7.40625 17.9062 7.32188 17.9062 7.21875V5.625C17.9062 3.96797 16.5633 2.625 14.9062 2.625H9.09375C7.43672 2.625 6.09375 3.96797 6.09375 5.625V10.875H4.5C4.08516 10.875 3.75 11.2102 3.75 11.625V20.625C3.75 21.0398 4.08516 21.375 4.5 21.375H19.5C19.9148 21.375 20.25 21.0398 20.25 20.625V11.625C20.25 11.2102 19.9148 10.875 19.5 10.875ZM18.5625 19.6875H5.4375V12.5625H18.5625V19.6875ZM11.3438 16.4297V17.6719C11.3438 17.775 11.4281 17.8594 11.5312 17.8594H12.4688C12.5719 17.8594 12.6562 17.775 12.6562 17.6719V16.4297C12.8497 16.2908 12.9941 16.0941 13.0687 15.8679C13.1432 15.6417 13.1441 15.3977 13.0711 15.1709C12.9982 14.9442 12.8552 14.7465 12.6627 14.6062C12.4702 14.466 12.2382 14.3904 12 14.3904C11.7618 14.3904 11.5298 14.466 11.3373 14.6062C11.1448 14.7465 11.0018 14.9442 10.9289 15.1709C10.8559 15.3977 10.8568 15.6417 10.9313 15.8679C11.0059 16.0941 11.1503 16.2908 11.3438 16.4297Z" />
              </svg>
              <svg className="notification__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.4375 2.3125H5.25C5.35313 2.3125 5.4375 2.22812 5.4375 2.125V2.3125H12.5625V2.125C12.5625 2.22812 12.6469 2.3125 12.75 2.3125H12.5625V4H14.25V2.125C14.25 1.29766 13.5773 0.625 12.75 0.625H5.25C4.42266 0.625 3.75 1.29766 3.75 2.125V4H5.4375V2.3125ZM17.25 4H0.75C0.335156 4 0 4.33516 0 4.75V5.5C0 5.60313 0.084375 5.6875 0.1875 5.6875H1.60312L2.18203 17.9453C2.21953 18.7445 2.88047 19.375 3.67969 19.375H14.3203C15.1219 19.375 15.7805 18.7469 15.818 17.9453L16.3969 5.6875H17.8125C17.9156 5.6875 18 5.60313 18 5.5V4.75C18 4.33516 17.6648 4 17.25 4ZM14.1398 17.6875H3.86016L3.29297 5.6875H14.707L14.1398 17.6875Z" />
              </svg>

              <button className="cta__primary">
                <svg className="cta__svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.8977 15.0563C16.4649 14.7516 17.1141 14.5781 17.8055 14.5781H17.8079C17.8782 14.5781 17.911 14.4938 17.8594 14.4469C17.1404 13.8016 16.319 13.2804 15.429 12.9047C15.4196 12.9 15.4102 12.8977 15.4008 12.893C16.8563 11.8359 17.8032 10.118 17.8032 8.17969C17.8032 4.96875 15.2063 2.36719 12.0024 2.36719C8.7985 2.36719 6.20397 4.96875 6.20397 8.17969C6.20397 10.118 7.15084 11.8359 8.60865 12.893C8.59928 12.8977 8.5899 12.9 8.58053 12.9047C7.53287 13.3477 6.59303 13.9828 5.78443 14.7938C4.98051 15.5962 4.34048 16.5475 3.90006 17.5945C3.46673 18.6198 3.23287 19.7184 3.211 20.8312C3.21037 20.8563 3.21476 20.8812 3.2239 20.9044C3.23304 20.9277 3.24675 20.949 3.26423 20.9669C3.2817 20.9848 3.30258 20.999 3.32564 21.0087C3.3487 21.0184 3.37347 21.0234 3.3985 21.0234H4.8024C4.90318 21.0234 4.98756 20.9414 4.9899 20.8406C5.03678 19.0312 5.761 17.3367 7.04303 16.0523C8.36725 14.7234 10.1297 13.9922 12.0047 13.9922C13.3337 13.9922 14.6087 14.3602 15.7079 15.0492C15.7361 15.067 15.7685 15.077 15.8019 15.0782C15.8352 15.0794 15.8682 15.0719 15.8977 15.0563ZM12.0047 12.2109C10.9313 12.2109 9.92115 11.7914 9.15943 11.0297C8.78466 10.6559 8.48755 10.2116 8.28521 9.72248C8.08288 9.23335 7.97933 8.70901 7.98053 8.17969C7.98053 7.10391 8.40006 6.09141 9.15943 5.32969C9.91881 4.56797 10.929 4.14844 12.0047 4.14844C13.0805 4.14844 14.0883 4.56797 14.8501 5.32969C15.2248 5.70349 15.5219 6.14776 15.7243 6.63689C15.9266 7.12603 16.0302 7.65036 16.029 8.17969C16.029 9.25547 15.6094 10.268 14.8501 11.0297C14.0883 11.7914 13.0782 12.2109 12.0047 12.2109ZM20.6251 17.7891H18.6563V15.8203C18.6563 15.7172 18.5719 15.6328 18.4688 15.6328H17.1563C17.0532 15.6328 16.9688 15.7172 16.9688 15.8203V17.7891H15.0001C14.8969 17.7891 14.8126 17.8734 14.8126 17.9766V19.2891C14.8126 19.3922 14.8969 19.4766 15.0001 19.4766H16.9688V21.4453C16.9688 21.5484 17.0532 21.6328 17.1563 21.6328H18.4688C18.5719 21.6328 18.6563 21.5484 18.6563 21.4453V19.4766H20.6251C20.7282 19.4766 20.8126 19.3922 20.8126 19.2891V17.9766C20.8126 17.8734 20.7282 17.7891 20.6251 17.7891Z" />
                </svg>
                <span> Add user</span>
              </button>
            </div>
          </nav>

          <div className="table__table">
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Institution
