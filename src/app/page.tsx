import React from 'react'
import Header from "./components/Header/Header"

import Hero from "./components/Hero/Hero"

import Category from "./components/Category/Category"

import Achievment from "./components/Achievment/Achievment"

import Courses from "./components/Courses/Courses"

import Team from "./components/Team/Team"

import Customer from "./components/Customer/Customer"

import Footer from "./components/Footer/Footer"


function page() {
  return (
    <div>
      
      <Header></Header>
    <Hero></Hero>
    <Category></Category>
    <Achievment></Achievment>
    <Courses></Courses>
    <Team></Team>
    <Customer></Customer>
    <Footer></Footer>
    </div>
  )
}

export default page
