import * as React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

const SignIn: React.FC<{}> = () => (
  <div>
    <a href="/">
      <FaFacebook />
    </a>
    {/* <a href={`${process.env.DOMAIN_API_AUTH}/auth/twitter`}> */}
    <a href="http://localhost:4000/auth/twitter">
      <AiFillTwitterCircle />
    </a>
  </div>
);

export default SignIn;
