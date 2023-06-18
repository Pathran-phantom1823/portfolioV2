"use client";
import Image from 'next/image';
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
    palette: {
        primary: {
            light: '#ffffff',
            main: '#ffffff'
        }
    }
});

const iconSize = 'large';

const socials = [
    {
        icon: <FacebookRoundedIcon color='primary' fontSize={iconSize} />
    },
    {
        icon: <LinkedInIcon color='primary' fontSize={iconSize} />
    },
    {
        icon: <ContactMailIcon color='primary' fontSize={iconSize} />
    }
]

function Banner() {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-x-56'>
            <div className='text-center'>
                <header className='mb-4'>
                    <h1 className='text-white text-xl md:text-[52px] md:leading-10'>John Patrick Cabia-an</h1>
                    <h1 className='text-white text-sm md:text-[30px] md:leading-10'>FullStack Developer</h1>
                </header>
                <div className='flex flex-row justify-center items-center'>
                    <ThemeProvider theme={theme}>
                        <div className='flex flex-row gap-5'>
                            {
                                socials.map(element => (
                                    <div>
                                        {element.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </ThemeProvider>
                </div>
            </div>
            <div >
                <Image
                    src={'/profile.jpg'}
                    alt="Profile Pic"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}

export default Banner