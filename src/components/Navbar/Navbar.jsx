import React,{useState} from "react";
import styles from "./Navbar.module.css";
import {getimageUrl} from "../../utils.js"

function Navbar() {
    const [menuopen,setmenuopen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Saikat Shasmal
      </a>
      <div  className={styles.menu}>
        <img src={ menuopen ? getimageUrl("nav/close2.png") : getimageUrl("nav/menu2.png")} alt="menu-button" className={styles.menuBtn} 
        onClick={()=> setmenuopen(!menuopen)}
        />
    <ul className={`${styles.menuitems} ${menuopen && styles.menuopen}`}
    onClick={()=>setmenuopen(false)}
    >
          <li>
            <a href="#about" className={styles.navlink}>About</a>
          </li>
          <li>
            <a href="#experience" className={styles.navlink}>Experience</a>
          </li>
          <li>
            <a href="#projects" className={styles.navlink} >Projects</a>
          </li>
          <li>
            <a href="#contact" className={styles.navlink} >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
