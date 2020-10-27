import { useState } from "react";
import userbase from 'userbase-js'

function SignInModal({setUser, setShowSignInModal}) {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");

  async function signIn() {
    try {
      const user = await userbase.signIn({
        username,
        password
      })
      console.log({user})
      setUser(user)
      setShowSignInModal(false)
    } catch(e) {
      throw new Error(e.message)
    }
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={e => setPasword(e.target.value)}
          />
          {/* <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 lg:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={signIn}
          >
            Sign In
          </button>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
        ©2020 Acme Corp. All rights reserved.
      </p> */}
    </div>
  );
}

export default SignInModal;
