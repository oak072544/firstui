import Sidebar from "./Sidebar"; 
//file นี้เป็น base การแบ่งสัดส่วนของหน้าเว็บ

const BaseLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="layout__main-content">{children}</main>;
    </div>
  );
};

export default BaseLayout;
