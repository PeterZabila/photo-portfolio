
import Footer from '../components/Footer';
import Header from '../components/Header';
// import Container from '@material-ui/core/Container'
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default SharedLayout