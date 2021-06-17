import { FC, Suspense, useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import '@/pages/demo.css'

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard')
    }
  }, [location, navigate]);

  return (
    <div>
      <div className="center layout">Layout</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default Layout
