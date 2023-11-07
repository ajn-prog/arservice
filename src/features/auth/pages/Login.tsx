import { LoginForm } from '../components';

const Login: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen w-full">
      <div className="hidden lg:block relative overflow-hidden bg-gray-200">
        <img
          src="/images/login-cover.png"
          alt="login-cover"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex justify-center align-middle">
        <div className="absolute flex space-x-4 right-4 top-4">
          <img src="/images/arkan-logo.png" alt="" className="w-24 " />
          <img src="/images/dalfin-white.png" alt="" className="w-24 " />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
