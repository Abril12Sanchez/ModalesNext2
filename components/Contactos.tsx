import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from "@fortawesome/fontawesome-svg-core";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import styles from "@/styles/styles.module.css";



const Contactos = () => {
    return (
      <div className={styles.contact}>
        <Link href={"https://www.facebook.com/abril.sc.1?mibextid=ZbWKwL"} > <Image src="/facebook.png" width={40} height={40} alt=""/></Link>
        <Link href={"https://github.com/Abril12Sanchez"} > <Image src="/github.png" width={40} height={40} alt=""/></Link>
        <Link href={"https://www.linkedin.com/in/dolores-abril-s%C3%A1nchez-3a18b5299"} > <Image src="/linkedin.png" width={40} height={40} alt=""/></Link>
        <Link href={"https://instagram.com/abril_sanchezc12?igshid=ZDc4ODBmNjlmNQ=="} > <Image src="/instagram.png" width={40} height={40} alt=""/></Link>
      </div>
    );
  };

  export default Contactos;