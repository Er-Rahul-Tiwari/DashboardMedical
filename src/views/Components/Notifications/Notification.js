import React from "react"

const Notification = ({props}) => {
  return (
    <>
        <div className="notification__layout">
            <svg className="notification__icon" viewBox="0 0 24 24" fill="none">
              <path d="M12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 20.7188C7.18594 20.7188 3.28125 16.8141 3.28125 12C3.28125 7.18594 7.18594 3.28125 12 3.28125C16.8141 3.28125 20.7188 7.18594 20.7188 12C20.7188 16.8141 16.8141 20.7188 12 20.7188Z" />
              <path d="M10.875 7.875C10.875 8.17337 10.9935 8.45952 11.2045 8.6705C11.4155 8.88147 11.7016 9 12 9C12.2984 9 12.5845 8.88147 12.7955 8.6705C13.0065 8.45952 13.125 8.17337 13.125 7.875C13.125 7.57663 13.0065 7.29048 12.7955 7.0795C12.5845 6.86853 12.2984 6.75 12 6.75C11.7016 6.75 11.4155 6.86853 11.2045 7.0795C10.9935 7.29048 10.875 7.57663 10.875 7.875ZM12.5625 10.5H11.4375C11.3344 10.5 11.25 10.5844 11.25 10.6875V17.0625C11.25 17.1656 11.3344 17.25 11.4375 17.25H12.5625C12.6656 17.25 12.75 17.1656 12.75 17.0625V10.6875C12.75 10.5844 12.6656 10.5 12.5625 10.5Z" />
            </svg>

            <p className="weight-700 cap">Notification Title </p>
            <svg className="notification__icon" viewBox="0 0 24 24" fill="none">
              <path d="M16.0644 8.31494C16.0644 8.21182 15.98 8.12744 15.8769 8.12744L14.33 8.13447L12.0003 10.9118L9.67299 8.13682L8.12378 8.12979C8.02065 8.12979 7.93628 8.21182 7.93628 8.31729C7.93628 8.36182 7.95269 8.404 7.98081 8.43916L11.03 12.072L7.98081 15.7024C7.95249 15.7368 7.93678 15.7798 7.93628 15.8243C7.93628 15.9274 8.02065 16.0118 8.12378 16.0118L9.67299 16.0048L12.0003 13.2274L14.3277 16.0024L15.8745 16.0095C15.9777 16.0095 16.062 15.9274 16.062 15.822C16.062 15.7774 16.0456 15.7353 16.0175 15.7001L12.973 12.0696L16.0222 8.43682C16.0503 8.404 16.0644 8.35947 16.0644 8.31494Z" />
              <path d="M12 1.52344C6.20156 1.52344 1.5 6.225 1.5 12.0234C1.5 17.8219 6.20156 22.5234 12 22.5234C17.7984 22.5234 22.5 17.8219 22.5 12.0234C22.5 6.225 17.7984 1.52344 12 1.52344ZM12 20.7422C7.18594 20.7422 3.28125 16.8375 3.28125 12.0234C3.28125 7.20938 7.18594 3.30469 12 3.30469C16.8141 3.30469 20.7188 7.20938 20.7188 12.0234C20.7188 16.8375 16.8141 20.7422 12 20.7422Z" />
            </svg>
            <div className="notification__content">
              <p className="weight-500 color-99">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor dignissim semper id nullam non mi in at neque.
              </p>
            </div>
          </div>
        
    </>
  )
}

export default Notification