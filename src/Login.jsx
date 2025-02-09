import React from 'react'

const Login = () => {
  return (
    <div>
        <h3 className='text-center mt-2'><b>amason.in</b></h3>
        <div className='log mt-5 rounded-3 border border-dark p-3'>
            <h3>Sign in</h3>
            <p><b>Email or mobile phone number</b></p>
            <input type="text" className='rounded-3 w-100' /><br /><br />
            <button className='rounded-pill bg-warning w-100 border p-1'>Continue</button><br /><br />
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <p> Need help?<br />
            ___</p>
            <p><b>Buying for work? </b><br />Shop on Amazon Business</p>

        </div>
        <div className='log2 mt-3'>
            <p>-------------------New to amason------------------</p>
            <button className='rounded-pill w-100 border border-dark p-1 '>Create your amason Account</button>
        </div>
    </div>
  )
}

export default Login