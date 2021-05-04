import React from "react"
import { useRecoilValue } from "recoil"
import { Link } from "react-router-dom"
import { checkbox } from "../../../../atoms/userTable"
import { Table } from "antd"
import "antd/dist/antd.css"
import search from "../../../../assets/search.svg"
import avatar from "../../../../assets/folderFrame.svg"
import rectImg from "../../../../assets/rectImg.jpg"
import copy from "../../../../assets/copy.svg"
import unorderedList from "../../../../assets/unorderedList.svg"
import folder from "../../../../assets/folderAdd.svg"
import link from "../../../../assets/link.svg"
import share from "../../../../assets/share.svg"
import InfoCircle from "../../../../assets/InfoCircle.svg"
import barChart from "../../../../assets/bar-Chart.svg"
import download from "../../../../assets/ctaDownload.svg"
import del from "../../../../assets/delete.svg"
import appStore from "../../../../assets/appStore.svg"

const File = () => {
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
            <div className="table__iconBox file__position">
              <div className="file__white">
                <div className="file__blue">
                  <img className="file__svgCopy" src={copy} alt={record.copy} />
                </div>
              </div>
              <img className="file__img" src={record.image} alt={record.name} />
            </div>

            <div className="table__name">
              <span className="weight-700 cap mb0">{record.name}</span>
              <Link to="" className="font-14 lower mb0">
                {" "}
                ( {record.user} images)
              </Link>
            </div>
          </div>
        )
      },
      filterMultiple: false,
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">FORMAT</span>
      },
      dataIndex: "format",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.format}</span>
          </div>
        )
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.format - b.format,
    },
    {
      title: () => {
        return <span className="table__header">SIZE</span>
      },
      dataIndex: "size",
      render: (text, record) => {
        return (
          <div className="form__group">
            <span className="color-c8"> {record.size}Mb</span>
          </div>
        )
      },
      filterMultiple: false,
      sortDirections: ["descend"],
      sorter: (a, b) => a.size - b.size,
    },
    {
      title: () => {
        return <span className="table__header">scan Date</span>
      },
      dataIndex: "scanDate",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.scanDate}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.scanDate - b.scanDate,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">upload Date</span>
      },
      dataIndex: "uploadDate",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.uploadDate}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.uploadDate - b.uploadDate,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">study</span>
      },
      dataIndex: "study",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.study}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.study - b.study,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">group</span>
      },
      dataIndex: "group",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.group}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.group - b.group,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">animal</span>
      },
      dataIndex: "animal",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.animal}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.animal - b.animal,
      sortDirections: ["descend"],
    },
    {
      title: () => {
        return <span className="table__header">tissue</span>
      },
      dataIndex: "tissue",
      render: (text, record) => {
        return (
          <div className="table__crBox">
            <span className="color-c8">{record.tissue}</span>
          </div>
        )
      },
      filterMultiple: false,
      sorter: (a, b) => a.tissue - b.tissue,
      sortDirections: ["descend"],
    },
  ]

  const data = [
    {
      key: "0",
      image: `${avatar}`,
      animal: "Mouse",
      name: "Muscle 1",
      format: "NDPI",
      size: 200,
      scanDate: "24/09/20",
      study: "IIT",
      uploadDate: "24/09/20",
      group: "Test3",
      tissue: "Muscle",
    },
    {
      key: "1",
      image: `${rectImg}`,
      animal: "Mouse",
      name: "Image12345_study01_sampleB",
      format: "NDPI",
      size: 200,
      scanDate: "24/09/20",
      study: "JMI",
      uploadDate: "24/09/20",
      group: "Test2",
      tissue: "Muscle",
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
          <nav className="file__nav">
            <div className="file__leftNav">

              <img className="file__rightNav-svg" src={unorderedList} alt="unordered List"/>
              <img className="file__rightNav-svg" src={appStore} alt="app store"/>
              <div className="topNavbar__vr-Line"></div>

            <div className=" form__group">
              <img src={search} className="form__searchSvg" alt="search icon" />
              <input className="form__input form__search" id="" type="" name="" placeholder="Search..." />
            </div>
            </div>

            <div className="file__rightNav">
              <img src={folder} alt="folder"/>
              <img src={link} alt="link"/>
              <img src={share} alt="share"/>
              <img className="file__rightNav-svg" src={InfoCircle} alt="InfoCircle"/>
              <img className="file__rightNav-svg" src={barChart} alt="barChart"/>
              <img className="file__rightNav-svg" src={download} alt="download"/>
              <img className="file__rightNav-svg" src={del} alt="delete"/>
              
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

export default File
