import styles from '../styles/Register.module.css'
import Image from 'next/image'
import React from 'react'
import * as ReactDOM from 'react-dom'
import { useRef } from 'react'

export default function Register({fajok}) {
    const myRef = useRef(null);
    return (
    <>
        <form id="form">
        <div className={styles.register}>
            <label htmlFor="username">Felhasználónév</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password" className={styles.dist}>Jelszó</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="faj" className={styles.dist}>Faj</label>
            <select name="faj" id="faj" ref={myRef}>
                    <option value="bat">Denevérek</option>
                    <option value="dunefolk">Dűnék-népe</option>
                    <option value="human">Emberek</option>
                    <option value="undead">Élőholtak</option>
                    <option value="wose">Fapásztorok</option>
                    <option value="direwolf">Farkasok</option>
                    <option value="gryphon">Griffek</option>
                    <option value="saurian">Gyíkok</option>
                    <option value="goblin">Koboldok</option>
                    <option value="horse">Lovak</option>
                    <option value="mechanical">Mechanikus</option>
                    <option value="naga">Nagák</option>
                    <option value="ogre">Ogrék</option>
                    <option value="orc">Orkok</option>
                    <option value="drake">Perzsekények</option>
                    <option value="merfolk">Sellők</option>
                    <option value="falcon">Sólymok</option>
                    <option value="monster">Szörnyek</option>
                    <option value="dwarf">Törpök</option>
                    <option value="troll">Trollok</option>
                    <option value="elf">Tündék</option>
            </select>
            <div className={styles.fajkep}>
                {/* fajok képeit mutatja kattintásra a listából */}
                {fajok.map((kep:any,i:number) => {
                    if (myRef.current.getElementsByTagName("option")[i].value === kep[i].caption) {
                    <Image 
                        key={kep[i]._id} 
                        src={kep[i].url} 
                        alt={kep[i].caption}
                        width={kep[i].caption === "drake" ? 96 : 72}
                        height={kep[i].caption === "drake" ? 124 : 72} 
                        priority/>
                    }})
                }
            </div>
        </div>
        </form>
    </>
    )
}