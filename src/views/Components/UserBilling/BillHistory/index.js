import React from "react"
import { useRecoilValue } from "recoil"
import { checkbox } from "../../../../atoms/userTable"
import { Table } from "antd"
import "antd/dist/antd.css"
import bank from "../../../../assets/bank.svg"
import search from "../../../../assets/search.svg"

const Institution = () => {
  const selectionType = useRecoilValue(checkbox)

  const columns = [
    {
      title: () => {
        return <span className="table__header">order</span>
      },
      dataIndex: "order",
      render: (text, record) => {
        return <p className="weight-700 cap mb0">Pack {record.order} credits</p>
      },
      filterMultiple: false,
      onFilter: (value, record) => record.order.indexOf(value) === 0,
      sorter: (a, b) => a.order.length - b.order.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">Type</span>
      },
      dataIndex: "type",
      render: (text, record) => {
        return <span className="table__header">visa</span>
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.type - b.type,
    },
    {
      title: () => {
        return <span className="table__header">Date</span>
      },
      dataIndex: "date",
      render: (text, record) => {
        return <span className="table__header">{record.date}</span>
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: () => {
        return <span className="table__header">cost</span>
      },
      dataIndex: "cost",
      render: (text, record) => {
        return <span className="table__header">{record.cost} $</span>
      },
      filterMultiple: false,
      onFilter: (value, record) => record.cost.indexOf(value) === 0,
      sorter: (a, b) => a.cost.length - b.cost.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">reference</span>
      },
      dataIndex: "reference",
      render: (text, record) => {
        return <span className="table__header">{record.reference}</span>
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.reference - b.reference,
    },
    {
      title: () => {
        return <span className="table__header">status</span>
      },
      dataIndex: "status",
      render: (text, record) => {
        return <span className="table__header color-pastel-green"> {record.status}</span>
      },
      filterMultiple: false,
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend"],
    },
  ]

  const data = [
    {
      key: "0",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepted",
    },
    {
      key: "1",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "2",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "3",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "4",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "5",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "6",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "6",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
    },
    {
      key: "7",
      order: 22000,
      type: "Visa",
      date: "20/02/2021",
      cost: 300,
      reference: "QT-0012-2020",
      status: "Accepting",
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
                <path d="M17.625 15.5625C16.957 15.5625 16.3406 15.7969 15.8578 16.1883L11.0016 12.675C11.0829 12.2287 11.0829 11.7713 11.0016 11.325L15.8578 7.81172C16.3406 8.20312 16.957 8.4375 17.625 8.4375C19.1766 8.4375 20.4375 7.17656 20.4375 5.625C20.4375 4.07344 19.1766 2.8125 17.625 2.8125C16.0734 2.8125 14.8125 4.07344 14.8125 5.625C14.8125 5.89687 14.85 6.15703 14.9227 6.40547L10.3102 9.74531C9.62578 8.83828 8.53828 8.25 7.3125 8.25C5.24062 8.25 3.5625 9.92812 3.5625 12C3.5625 14.0719 5.24062 15.75 7.3125 15.75C8.53828 15.75 9.62578 15.1617 10.3102 14.2547L14.9227 17.5945C14.85 17.843 14.8125 18.1055 14.8125 18.375C14.8125 19.9266 16.0734 21.1875 17.625 21.1875C19.1766 21.1875 20.4375 19.9266 20.4375 18.375C20.4375 16.8234 19.1766 15.5625 17.625 15.5625ZM17.625 4.40625C18.2977 4.40625 18.8438 4.95234 18.8438 5.625C18.8438 6.29766 18.2977 6.84375 17.625 6.84375C16.9523 6.84375 16.4062 6.29766 16.4062 5.625C16.4062 4.95234 16.9523 4.40625 17.625 4.40625ZM7.3125 14.0625C6.17578 14.0625 5.25 13.1367 5.25 12C5.25 10.8633 6.17578 9.9375 7.3125 9.9375C8.44922 9.9375 9.375 10.8633 9.375 12C9.375 13.1367 8.44922 14.0625 7.3125 14.0625ZM17.625 19.5938C16.9523 19.5938 16.4062 19.0477 16.4062 18.375C16.4062 17.7023 16.9523 17.1562 17.625 17.1562C18.2977 17.1562 18.8438 17.7023 18.8438 18.375C18.8438 19.0477 18.2977 19.5938 17.625 19.5938Z" />
              </svg>
              <svg className="notification__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.8523 15.4922C11.8699 15.5146 11.8923 15.5327 11.9179 15.5452C11.9435 15.5577 11.9715 15.5641 12 15.5641C12.0285 15.5641 12.0565 15.5577 12.0821 15.5452C12.1077 15.5327 12.1301 15.5146 12.1477 15.4922L14.7727 12.1711C14.8687 12.0492 14.782 11.8687 14.625 11.8687H12.8883V3.9375C12.8883 3.83437 12.8039 3.75 12.7008 3.75H11.2945C11.1914 3.75 11.107 3.83437 11.107 3.9375V11.8664H9.375C9.21797 11.8664 9.13125 12.0469 9.22734 12.1688L11.8523 15.4922ZM20.5781 14.6719H19.1719C19.0688 14.6719 18.9844 14.7563 18.9844 14.8594V18.4688H5.01562V14.8594C5.01562 14.7563 4.93125 14.6719 4.82812 14.6719H3.42188C3.31875 14.6719 3.23438 14.7563 3.23438 14.8594V19.5C3.23438 19.9148 3.56953 20.25 3.98438 20.25H20.0156C20.4305 20.25 20.7656 19.9148 20.7656 19.5V14.8594C20.7656 14.7563 20.6812 14.6719 20.5781 14.6719Z" />
              </svg>

              <button className="cta__primary">
                <svg className="cta__svg" viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.9375 0.4375H2.0625C1.1291 0.4375 0.375 1.1916 0.375 2.125V35.875C0.375 36.8084 1.1291 37.5625 2.0625 37.5625H45.9375C46.8709 37.5625 47.625 36.8084 47.625 35.875V2.125C47.625 1.1916 46.8709 0.4375 45.9375 0.4375ZM4.17188 4.23438H43.8281V10.5625H4.17188V4.23438ZM43.8281 33.7656H4.17188V15.2031H43.8281V33.7656ZM31.3301 30.3906H40.0312C40.2633 30.3906 40.4531 30.2008 40.4531 29.9688V26.1719C40.4531 25.9398 40.2633 25.75 40.0312 25.75H31.3301C31.098 25.75 30.9082 25.9398 30.9082 26.1719V29.9688C30.9082 30.2008 31.098 30.3906 31.3301 30.3906Z" />
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
