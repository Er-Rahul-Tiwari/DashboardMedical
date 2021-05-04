import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import avatar from "../../../assets/avatar.jpg"

const TopNavbar = () => {
  const [menuSelected, setMenuSelected] = useState(0)

  const handleSelection = (prop) => {
    console.log(prop)
    setMenuSelected(prop)
  }

  useEffect(() => console.log("[Mount][LeftSideNavbar]"), [])

  return (
    <>
      <div className="topNavbar">
        <h1 className="heading-1">Dashboard</h1>

        <div className="topNavbar__box">
          <div className="topNavbar__crBox" onClick={() => handleSelection(1)}>
            <div className="topNavbar__cr">
              <p>cr</p>
            </div>
            <span className="font-14 weight-700">20k</span>
          </div>
          <div className="topNavbar__svg" onClick={() => handleSelection(2)}>
            <svg className="topNavbar__icon" viewBox="0 0 24 25">
              <path d="M20.25 17.277c0-2.616-1.533-4.875-3.75-5.927V7.464c0-.354-.124-.696-.354-.966l-3.572-4.235c-.15-.178-.363-.267-.574-.267-.21 0-.424.089-.574.267L7.854 6.498c-.228.27-.354.612-.354.966v3.886c-2.217 1.052-3.75 3.311-3.75 5.927h3.668c-.054.169-.082.352-.082.558 0 .518.178 1.024.502 1.425.263.328.613.576 1.01.717.541 1.266 1.771 2.081 3.152 2.081.682 0 1.343-.201 1.908-.581.553-.37.982-.888 1.242-1.5.396-.14.746-.388 1.01-.715.324-.404.5-.907.502-1.425 0-.197-.026-.384-.073-.558h3.661v-.002zm-2.384-2.686c.22.342.399.71.528 1.092h-1.988v-2.561c.585.381 1.083.882 1.46 1.47zM9.094 11.35V7.499L12 4.054l2.906 3.445v8.184H9.094V11.35zm-3.488 4.333c.13-.382.307-.75.528-1.092.382-.59.878-1.09 1.46-1.47v2.562H5.606zm9.115 2.724c-.122.07-.262.098-.4.08l-.458-.057-.065.455c-.127.888-.9 1.558-1.798 1.558s-1.671-.67-1.798-1.558l-.065-.457-.457.058c-.14.017-.28-.012-.401-.082-.204-.117-.33-.335-.33-.572 0-.248.138-.454.342-.557h5.42c.207.105.343.311.343.558-.002.239-.129.459-.333.574zm-3.846-9.005c0 .298.118.585.33.796.21.21.497.329.795.329.298 0 .585-.118.796-.33.21-.21.329-.497.329-.795 0-.298-.118-.584-.33-.795-.21-.211-.497-.33-.795-.33-.298 0-.585.119-.796.33-.21.21-.329.497-.329.795z" />
            </svg>
          </div>
          <div className="topNavbar__vr-Line"></div>
          <div className="topNavbar__svg" onClick={() => handleSelection(3)}>
            <svg className="topNavbar__icon" viewBox="0 0 24 25">
              <path d="M12 1.527c-5.798 0-10.5 4.702-10.5 10.5 0 5.799 4.702 10.5 10.5 10.5s10.5-4.701 10.5-10.5c0-5.798-4.702-10.5-10.5-10.5zm0 19.219c-4.814 0-8.719-3.905-8.719-8.719S7.186 3.308 12 3.308s8.719 3.905 8.719 8.719-3.905 8.719-8.719 8.719z" />
              <path d="M14.616 7.45c-.704-.617-1.632-.954-2.616-.954-.984 0-1.912.34-2.616.954-.73.64-1.134 1.5-1.134 2.42v.179c0 .103.084.187.188.187h1.124c.104 0 .188-.084.188-.187V9.87c0-1.034 1.01-1.875 2.25-1.875s2.25.841 2.25 1.875c0 .729-.516 1.397-1.315 1.704-.497.19-.919.522-1.22.958-.308.446-.467.98-.467 1.521v.504c0 .103.084.188.187.188h1.125c.103 0 .188-.085.188-.188v-.532c0-.227.07-.45.2-.636.129-.188.312-.332.524-.414 1.383-.532 2.276-1.75 2.276-3.105.002-.921-.401-1.781-1.132-2.421zm-3.553 9.733c0 .249.098.487.274.663.176.176.414.275.663.275.249 0 .487-.099.663-.275.176-.176.274-.414.274-.663 0-.248-.098-.487-.274-.663-.176-.175-.414-.274-.663-.274-.249 0-.487.099-.663.274-.176.176-.274.415-.274.663z" />
            </svg>
          </div>
          <div className="topNavbar__svg topNavbar__grid" onClick={() => handleSelection(4)}>
            <svg viewBox="0 0 24 25" className="topNavbar__icon">
              <path d="M21.75 3.777H2.25c-.415 0-.75.335-.75.75v15c0 .415.335.75.75.75h19.5c.415 0 .75-.335.75-.75v-15c0-.415-.335-.75-.75-.75zm-.938 2.597V18.59H3.188V6.374l-.646-.504.92-1.184 1.004.78h15.073l1.003-.78.92 1.184-.648.504zm-1.274-.91L12 11.325l-7.537-5.86-1.004-.78-.92 1.184.646.504 8.006 6.225c.23.178.514.276.805.276.292 0 .575-.098.806-.276l8.01-6.223.647-.504-.92-1.184-1.002.779z" />
            </svg>
            <div className="topNavbar__notification--circle topNavbar__notification--circle-azure">
              <span className="topNavbar__span">2</span>
            </div>
          </div>
          <Link to="HistoryNotification" className="topNavbar__svg topNavbar__grid" onClick={() => handleSelection(5)}>
            <svg viewBox="0 0 24 25" className="topNavbar__icon">
              <path d="M19.125 18.027h-.563v-7.969c0-3.307-2.444-6.04-5.625-6.494v-.912c0-.518-.419-.937-.937-.937s-.938.42-.938.937v.912c-3.18.454-5.624 3.187-5.624 6.494v7.969h-.563c-.415 0-.75.335-.75.75v.75c0 .103.084.188.188.188h5.062c0 1.448 1.177 2.625 2.625 2.625s2.625-1.177 2.625-2.625h5.063c.103 0 .187-.085.187-.188v-.75c0-.415-.335-.75-.75-.75zM12 20.84c-.621 0-1.125-.504-1.125-1.125h2.25c0 .62-.504 1.125-1.125 1.125zm-4.875-2.813v-7.969c0-1.303.506-2.526 1.427-3.447.921-.921 2.145-1.428 3.448-1.428s2.527.507 3.448 1.428c.92.92 1.427 2.144 1.427 3.447v7.969h-9.75z" />
            </svg>
            <div className="topNavbar__notification--circle topNavbar__notification--circle-laser">
              <span className="topNavbar__span">1</span>
            </div>
          </Link>
          <div className="topNavbar__vr-Line"></div>
          <div className="topNavbar__avatar" onClick={() => handleSelection(6)}>
            <img className="topNavbar__img" src={avatar} alt="avatar" />
            <span className="cap weight-700">firstname</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
