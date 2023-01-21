import styles from '../styles/Register.module.css'
import { useState } from 'react'

export default function Register() {

    const [value, setValue] = useState('bat');

    function FajDisplay() {
        //console.log(fajok[num].url);
        if (typeof window !== 'undefined') {
        return (
            document.getElementById('fajkep').innerHTML = `<img   
                src="./fajok/${value}.png"
                alt="${value} icon"
                width=${value == "drake" ? 96 : 72}
                height=${value == "drake" ? 124 : 72}
                />`
            )
        }   
        
    }

    return (

    <>
        <form id="form">
        <div className={styles.register}>
            <label htmlFor="username">Felhasználónév</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password" className={styles.dist}>Jelszó</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="faj" className={styles.dist}>Faj</label>
            <select name="faj" onChange={(e) => {setValue(e.target.value)}}>
                    <option value="bat" onClick={FajDisplay()}>Denevérek</option>
                    <option value="dunefolk" onClick={FajDisplay()}>Dűnék-népe</option>
                    <option value="human" onClick={FajDisplay()}>Emberek</option>
                    <option value="undead" onClick={FajDisplay()}>Élőholtak</option>
                    <option value="wose" onClick={FajDisplay()}>Fapásztorok</option>
                    <option value="direwolf" onClick={FajDisplay()}>Farkasok</option>
                    <option value="gryphon" onClick={FajDisplay()}>Griffek</option>
                    <option value="saurian" onClick={FajDisplay()}>Gyíkok</option>
                    <option value="goblin" onClick={FajDisplay()}>Koboldok</option>
                    <option value="horse" onClick={FajDisplay()}>Lovak</option>
                    <option value="mechanical" onClick={FajDisplay()}>Mechanikus</option>
                    <option value="naga" onClick={FajDisplay()}>Nagák</option>
                    <option value="ogre" onClick={FajDisplay()}>Ogrék</option>
                    <option value="orc" onClick={FajDisplay()}>Orkok</option>
                    <option value="drake" onClick={FajDisplay()}>Perzsekények</option>
                    <option value="merfolk" onClick={FajDisplay()}>Sellők</option>
                    <option value="falcon" onClick={FajDisplay()}>Sólymok</option>
                    <option value="monster" onClick={FajDisplay()}>Szörnyek</option>
                    <option value="dwarve" onClick={FajDisplay()}>Törpök</option>
                    <option value="troll" onClick={FajDisplay()}>Trollok</option>
                    <option value="elf" onClick={FajDisplay()}>Tündék</option>
            </select>
            <div id="fajkep" className={styles.fajkep}>
            {/* fajok képeit mutatja kattintásra a listából */}
            </div>
            <div className={styles.dist}>
                <button>Regisztrálok</button>
            </div>
        </div>
        </form>
    </>
    )
}
