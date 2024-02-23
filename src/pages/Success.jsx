import Menu from '../components/Menu'
import Dashboard from '../components/Dashboard'

const Success = () => {
  return (
    <>
    <Menu/>
    <Dashboard/>
    <div className="absolute inset-x-1/3 top-28 text-2xl font-extrabold text-lightGreen">Movies uploaded successfully!</div>
    </>
  )
}

export default Success