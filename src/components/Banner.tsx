"use client";
import Image from 'next/image';
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import './styles.css'
const theme = createTheme({
    palette: {
        primary: {
            light: '#1A74E2',
            main: '#1A74E2'
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
        <header className='bannerContent flex flex-col md:flex-row justify-center items-center gap-4 md:gap-x-56'>
            <div className='block md:hidden'>
                <div className='borders'>
                    <Image
                        src={'/profile.jpg'}
                        alt="Profile Pic"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
            <div className='text-center'>
                <header className='mb-4'>
                    <h1 className='text-white text-[30px] font-bold md:text-[52px] md:leading-10 mb-3'>John Patrick Cabia-an</h1>
                    <h1 className='text-white text-sm md:text-[30px] md:leading-10'>FullStack Developer</h1>
                </header>
                <div className='flex flex-row justify-center items-center'>
                    <ThemeProvider theme={theme}>
                        <div className='flex flex-row gap-5 cursor-pointer'>
                            {
                                socials.map(element => (
                                    <div className='icons'>
                                        {element.icon}
                                    </div>
                                ))
                            }
                        </div>
                    </ThemeProvider>
                </div>
            </div>
            <div className='hidden md:block relative p-10'>
                <div className='borders'>
                    <Image
                        src={'/profile.jpg'}
                        alt="Profile Pic"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </header>
    )
}

export default Banner