import Link from "next/link";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
// import styles from "./page.module.css";
import styles from "@/styles/styles.module.css";
import Contactos from "@/components/Contactos";
import Counter from "@/components/Counter";
import Login from "@/components/login";
import IndexPage from "@/components/indexPage";

export default function Home() {
  return (
 <div className={styles.container}> 
   <Head>
     {/* con mayusculas, es componente y agregarlo con link */}
    <title>Solo mi pagina</title>
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

   </Head>

   {/* barra de navegacion */}
   {/* <nav className={styles.navbar}>
  <Link href="#" className={styles.navbarBrand}>Home</Link>

    <ul className={styles.navbarNav}>
      <li className={styles.navItem }>
         <Link href="/pages/ayuda" className={styles.navLink}>Ayuda</Link>
      </li>

       <li className={styles.navItem }>
         <Link href="/pages/sesion" className={styles.navLink}>Sesión</Link>
       </li>
     </ul>

   </nav>   */}

  {/* contenido principal */}

  {/* <div className={styles.content}>

    <h1> hola mundo 🍓</h1>

    <div className={styles.info}> 
    <h2>Dolores Abril Sanchez Camacho</h2>*/}
    {/* <Image src="/ima1.jpg" width={250} height={200} alt="imagen de kitty" /> */}
    {/* <Image src="/yo2.jpg" width={200} height={200} alt="imagen de kitty" className={styles.roundedImage} />
    
  </div>
   

     </div>  */}

  {/* componente footer
    <Contactos/>
    <Footer/>
    <Counter/> */}

    <IndexPage/>


</div>
   )
}
