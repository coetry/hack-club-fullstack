import { useState } from "react";
import userbase from 'userbase-js'

import Link from "next/link";

import SignUpModal from "./sign-up-modal";
import SignInModal from './sign-in-modal'

import Button from "./button";

export default function Nav({user, setUser}) {
  const [showSignUpModal, setShowSignUpModal] = useState();
  const [showSignInModal, setShowSignInModal] = useState();

  async function signOut() {
    try {
      console.log('signing out...')
      await userbase.signOut() 
      setUser(false)
    } catch(e) {
      throw new Error(e.message)
    }
  }

  return (
    <>
      <nav>
        <ul className="flex justify-between items-center p-8">
          <li>
            <Link href="/">
              <a className="text-red-500 no-underline">Home</a>
            </Link>
          </li>
          {!user ? (
          <ul className="flex justify-between items-center space-x-4">
            <Button
              onClick={(e) => {
                setShowSignUpModal(!showSignUpModal)
                setShowSignInModal(false)
              }}
            >
              Sign Up
            </Button>
            <Button onClick={(e) => {
              setShowSignInModal(true)
              setShowSignUpModal(false)
            }}>Sign In</Button>
          </ul> ) : (
            <Button onClick={signOut}>Sign Out</Button>
          )}
        </ul>
      </nav>
      {!user && showSignUpModal && <SignUpModal setUser={setUser} setShowSignUpModal={setShowSignUpModal} />}
      {!user && showSignInModal && <SignInModal setUser={setUser} setShowSignInModal={setShowSignInModal} />}
    </>
  );
}
