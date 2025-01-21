import React from 'react'
import Breadcrumb from "./components/Breadcrumb/Breadcrumb"
import NameApps from './components/NameApps/NameApps'
import Description from "./components/Descripton/Description"
import ImagePreview from './components/ImagePreview/ImagePreview'
import AboutDesc from './components/AboutDesc/AboutDesc'
import Technology from './components/TechnologyUsed/Technology'
import Youmight from "./components/Youmight/Youmight"
const page = () => {
  return (
    <>
<Breadcrumb/>
<NameApps/>
<Description/>
<ImagePreview/>
<AboutDesc/>
<Technology/>
<Youmight/>
    </>
  )
}

export default page