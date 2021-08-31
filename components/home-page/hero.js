import React from 'react'
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/swapnil.jpg" alt="An image showing Swapnil" width={300} height={300} />
            </div>
            <h1>Hi, I'm Swapnil</h1>
            <p>
                Aspiring Software Developer
            </p>
        </section>
    )
}

export default Hero
