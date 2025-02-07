import React from 'react';
import HeaderText from '../HomePage/HeaderText';
import HeaderWord from '../HomePage/HeaderWord';
import Cards from '../ServiceCard/Cards';
import Reviews from '../Reviews/Reviews';
import './css/servicePage.css'
import { SectionTitle } from '../HomePage/HomePage';

const ServicePage = () => {
    return (
    <>
        <body className="ServiceBackground">
            <div className="HeaderContainer">
                <HeaderText text1="Services" text2=""/>
                <HeaderWord text="Choose from our wide range of services"/>
            </div>
        </body> 
        <SectionTitle text1='Our' text2='Services'/>
        <Cards />
        <SectionTitle text1='Clients' text2='Love'/>
    
        <Reviews />
    </>
    )
   
}

export default ServicePage
