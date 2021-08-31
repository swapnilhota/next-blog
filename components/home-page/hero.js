import React from 'react'
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image />
            </div>
            <h1>Hi, I'm Swapnil</h1>
            <p>
                Aspiring Software Developer
            </p>
        </section>
    )
}

export default Hero
