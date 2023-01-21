import styles from '../styles/Register.module.css'
import Image from 'next/image';
import { useState } from 'react'

export default function Register() {

    const [value, setValue] = useState('bat');

    function FajDisplay() { 
        return ((e) => setValue(e.target.value))
    }

    return (

    <>
        <form id="form">
        <div className={styles.register}>
            <label htmlFor="username">Felhasználónév</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email" className={styles.dist}>Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password" className={styles.dist}>Jelszó</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="faj" className={styles.dist}>Faj</label>
            <select name="faj" onChange={FajDisplay()}>
                    <option value="bat" >Denevérek</option>
                    <option value="dunefolk" >Dűnék-népe</option>
                    <option value="human" >Emberek</option>
                    <option value="undead" >Élőholtak</option>
                    <option value="wose" >Fapásztorok</option>
                    <option value="wolf" >Farkasok</option>
                    <option value="gryphon" >Griffek</option>
                    <option value="saurian" >Gyíkok</option>
                    <option value="goblin" >Koboldok</option>
                    <option value="horse" >Lovak</option>
                    <option value="mechanical" >Mechanikus</option>
                    <option value="naga" >Nagák</option>
                    <option value="ogre" >Ogrék</option>
                    <option value="orc" >Orkok</option>
                    <option value="drake" >Perzsekények</option>
                    <option value="merfolk" >Sellők</option>
                    <option value="falcon" >Sólymok</option>
                    <option value="monster" >Szörnyek</option>
                    <option value="dwarve" >Törpök</option>
                    <option value="troll" >Trollok</option>
                    <option value="elf" >Tündék</option>
            </select>
            
            <div className={styles.fajkep}>
                {/* fajok képeit mutatja kattintásra a listából */}
                <Image 
                    src={`/fajok/${value}.png`}
                    alt={`${value}-icon`}
                    width={72}
                    height={72}
                    priority
                />
            </div>
            
            <div className={styles.button}>
                <button>Regisztrálok</button>
            </div>
        </div>
        </form>
    </>
    )
}
