import Nav from './nav'
function Layout({ children, user, setUser }) {
  return <div>
    <Nav user={user} setUser={setUser} />
    {children} 
  </div>
}

export default Layout