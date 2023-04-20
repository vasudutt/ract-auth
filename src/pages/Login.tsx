import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';

const Login = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (e) => {
    if (e === 'SIGNED_IN') {
      navigate('/success');
    } else {
      navigate('/');
    }
  });

  return (
    <div>
      <Auth
        supabaseClient={supabase}
        theme="dark"
        providers={['google']}
      />
    </div>
  );
};

export default Login;
