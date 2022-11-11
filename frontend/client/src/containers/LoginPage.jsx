import Layout from "components/Layout";
import { Navigate } from "react-router-dom";
import { login, resetRegistered } from "features/user";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { email, password } = formData;
  const { loading, isAuthenticated, registered } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (registered) dispatch(resetRegistered());
  }, [registered]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <Layout title="Auth Site | Login" content="Login page">
      <h1>Log into your account</h1>
      <form className="mt-5" onSubmit={onSubmit}>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={email}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="password"
            onChange={onChange}
            value={password}
            required
          />
        </div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <button className="btn btn-primary mt-4">Login</button>
        )}
      </form>
    </Layout>
  );
};

export default LoginPage;
