import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client/supabaseClient';

const Success = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          Success
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          Please sign in
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            Log In Page
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
