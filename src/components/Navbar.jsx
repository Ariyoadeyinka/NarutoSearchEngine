import styles from "../css/Navbar.module.css";
import logo from '../images/Naruto_logo.svg.png'
export default function Navbar(){
    return <div className= {styles.navBar}>
  <img className={styles.logo} src={logo} alt="" />
    </div>
}