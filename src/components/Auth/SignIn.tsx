import * as React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {FaFacebook} from 'react-icons/fa';

/**
 * call /auth/twitter for authentication
 * the result will be stored in the cookie
 */
const SignIn: React.FC<{}> = () => (
  <div>
    <a href="/">
      <FaFacebook />
    </a>
    {/* <a href={`${process.env.DOMAIN_API_AUTH}/auth/twitter`}> */}
    <a href={`${process.env.DOMAIN_API_AUTH}/auth/twitter`}>
      <AiFillTwitterCircle />
    </a>
  </div>
);

export default SignIn;
