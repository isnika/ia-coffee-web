import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

import {mockUsers } from "../mock/users";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Email hoặc mật khẩu không đúng!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));

    alert(`Xin chào ${user.fullName}!`);

    navigate("/");
  };

  return (
    <div className={styles.page}>
      <div className={styles.overlay} />

      <div className={styles.card}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>

          <p>
            Đăng nhập để đặt món, theo dõi đơn hàng và nhận những ưu đãi dành
            riêng cho bạn tại <strong>ia Coffee & More.</strong>
          </p>

          <div className={styles.quote}>
            "Every cup tells a story."
          </div>
        </div>

        <div className={styles.right}>
          <h2>Đăng nhập</h2>

          <form onSubmit={handleLogin}>
            <div className={styles.group}>
              <label>Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.group}>
              <label>Mật khẩu</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.options}>
              <label>
                <input type="checkbox" />
                Ghi nhớ tôi
              </label>

              <Link to="/forgot-password">
                Quên mật khẩu?
              </Link>
            </div>

            <button type="submit" className={styles.loginButton}>
              Đăng nhập
            </button>
          </form>

          <div className={styles.divider}>
            <span>hoặc</span>
          </div>

          <button className={styles.googleButton}>
            Đăng nhập với Google
          </button>

          <p className={styles.register}>
            Chưa có tài khoản?{" "}
            <Link to="/register">
              Đăng ký ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;