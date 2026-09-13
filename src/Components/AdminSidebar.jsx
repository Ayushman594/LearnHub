import { useState } from "react";
import logo from "../assets/Booklogowithoutbg.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
function AdminSidebar() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {" "}
      {/* Logo */}{" "}
      <div className="d-flex pt-5 justify-content-center align-items-center gap-2">
        {" "}
        <img src={logo} alt="LearnHub Logo" className="logo" />{" "}
        {!collapsed && (
          <Link
            className="navbar-brand text-primary mb-3 title text-decoration-none fw-bold"
            to="/"
          >
            {" "}
            LearnHub{" "}
          </Link>
        )}{" "}
      </div>{" "}
      {/* Collapse Button */}{" "}
      <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)}>
        {" "}
        {collapsed ? "→" : "←"}{" "}
      </button>{" "}
      {/* Navigation */}{" "}
      <div className="sidebar-menu">
        {" "}
        <ul className="navbar-nav gap-3">
          {" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/admin-dashboard" end>
              {" "}
              <span>🏠</span> {!collapsed && <span>Dashboard</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/explore-courses" end>
              {" "}
              <span>📚</span> {!collapsed && <span>Update Courses</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/add-teachers" end>
              {" "}
              <span>👨‍🏫</span>{" "}
              {!collapsed && <span>Add and View Teachers</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/view-learners" end>
              {" "}
              <span>👥</span>{" "}
              {!collapsed && <span>View Registered Students</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/view-feedbacks" end>
              {" "}
              <span>💬</span> {!collapsed && <span>View Feedbacks</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <NavLink className="nav-link" to="/view-queries" end>
              {" "}
              <span>❓</span> {!collapsed && <span>View Queries</span>}{" "}
            </NavLink>{" "}
          </li>{" "}
          <li className="nav-item">
            {" "}
            <button
              className="btn btn-primary p-2 w-100"
              onClick={() => navigate("/admin-login")}
            >
              {" "}
              {!collapsed ? "Log out" : "↪"}{" "}
            </button>{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </section>
  );
}
export default AdminSidebar;
