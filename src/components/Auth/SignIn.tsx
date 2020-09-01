import * as React from 'react';
import {AiFillTwitterCircle} from 'react-icons/ai';

const SignIn: React.FC<{}> = () => (
  <a href={`${process.env.DOMAIN_API_AUTH}/auth/twitter`}>
    <AiFillTwitterCircle />
  </a>
);

export default SignIn;
