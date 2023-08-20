import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  

  return (
    <>
    <h1>City Attraction App</h1>
    <p>
      <nav>
        <div>
          <ul>
            <li><a href="#photo0">Memphis</a></li>
            <li><a href="#photo1">New Orleans</a></li>
            <li><a href="#photo2">Los Angeles</a></li>
            <li><a href="#photo3">Chicago</a></li>
            <li><a href="#photo4">New York</a></li>
            <li><a href="#photo5">Miami</a></li>
          </ul>
        </div>
      </nav>
    </p>
    <div>
    <h2 id="photo0">Memphis</h2>
      <ul>
        <li>
          <img src="https://cdn.outsideonline.com/wp-content/uploads/2022/08/bass-pro-pyramid-memphis-night_h.jpg?crop=16:9&width=1200&enable=upscale&quality=100"></img>
        </li>
        <li>
          <img src="https://i0.wp.com/wordpress.thetruthtoledo.com/wp-content/uploads/2022/02/beale.jpg?w=700"></img>
        </li>
        <li>
          <img src="https://www.thevintagenews.com/wp-content/uploads/sites/65/2022/09/elvis-graceland-85842.png"></img>
        </li>
        <li>
          <img src="https://fastly.4sqi.net/img/general/width960/2116576_hLy20gKKFshFr5I2bPsx7w6STnYhr0g9gpHI9FQDEV4.jpg"></img>
        </li>
      </ul>
    </div>

    <div><center>
      <h2 id="photo1">New Orleans</h2>
      <ol>
        <li>
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdr4ZuYCi6W_VO8OF8G7OAnaA5AIjy0LmT4djh1a2DYveiwfs0Yucq9hRHks7aev5MTnLw6F7vEvbaWnQBH1Za787qYFa2BdFHK9v4TZItVPeyBZ0VHcWu6VG6JC3bPNMyU5KnEFFV7eKMqI5H28T624jrrZT-KrREuDhlXA5Y9ZpV8OMnuG0h-yrUsA/s1200-rw/st-louis-cathedral-new-orleans-french-quarter.jpg"></img>
        </li>
        <li>
          <img src="https://images.r.cruisecritic.com/features/2017/01/rewrite_local-nola.jpg"></img>
        </li>
        <li>
          <img src="https://m.media-amazon.com/images/I/51UDeX-9akL._AC_UF894,1000_QL80_.jpg"></img>
        </li>
        <li>
          <img src="https://www.thebach.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fbi5ihkjoby38%2Fprod-activities%2Factivities%2F5824596115617%2F1c2d6a2c-cd50-4aed-a78c-479f365200ee%2FIMG2318_5d03c19181060.jpg&w=1920&q=75"></img>
        </li>
      </ol>
    </center>
    </div>

    <div><center>
      <h2 id="photo2">Los Angeles</h2>
      <ol>
        <li>
          <img src="https://cache.undercovertourist.com/tickets/los-angeles-universal-studios-hollywood-peak-general-admisssion-5994-186e114a2a9.jpg"></img>
        </li>
        <li>
          <img src="https://i.redd.it/stopped-at-the-griffith-observatory-and-couldnt-help-but-v0-lmixt5hrci2a1.png?s=ba8c64b1bea650fd2dad8ed228d35ffe36edfc1a"></img>
        </li>
        <li>
          <img src="https://media.visualstories.com/uploads/images/1/175/5633003-696_485341323-venice-beach-skate-park-los-angeles_p.jpg"></img>
        </li>
        <li>
          <img src="https://media.istockphoto.com/id/458099227/photo/hollywood-sign-afternoon.jpg?s=612x612&w=0&k=20&c=1VRbwciFnjZENid5O4ftPJl8QTLdSEG1z0puIq9dJ2k="></img>
        </li>
      </ol>
    </center>
    </div>

    <div><center>
      <h2 id="photo3">Chicago</h2>
      <ol>
        <li>
          <img src="https://image-tc.galaxy.tf/wijpeg-effa62ctfc8tgrfxiposi7vw4/navy-pier_standard.jpg?crop=227%2C0%2C547%2C410"></img>
        </li>
        <li>
          <img src="https://media.istockphoto.com/id/985260112/photo/cloud-gate-in-millennium-park-at-sunrise-chicago.jpg?s=612x612&w=0&k=20&c=0xTDiLxAzXJE2A0OlMaeSdMyiv95d_eQx-jzgScuvAs="></img>
        </li>
        <li>
          <img src="https://media.timeout.com/images/106024586/image.jpg"></img>
        </li>
        <li>
          <img src="https://www.urtrips.com/wp-content/uploads/2022/12/Museum-of-Contemporary-Art-Chicago3.png"></img>
        </li>
      </ol>
    </center>
    </div>

    <div><center>
      <h2 id="photo4">New York</h2>
      <ol>
        <li>
          <img src="https://media.istockphoto.com/id/528726253/photo/aerial-view-of-the-statue-of-liberty-new-york.jpg?s=612x612&w=0&k=20&c=rmZzM9Mjf5n880YWA9EgIE3LQWM8QxPWrq5hCpj96qY="></img>
        </li>
        <li>
          <img src="https://img.global.news.samsung.com/global/wp-content/uploads/2019/06/Samsung-LED-signage-installation_main1F.jpg"></img>
        </li>
        <li>
          <img src="https://triptins.com/wp-content/uploads/2020/12/Brooklyn-Bridge-Walk.jpeg"></img>
        </li>
        <li>
          <img src="https://www.wanderlustingk.com/wp-content/uploads/2019/11/NYCMay23-49211905247749210142-1.jpg"></img>
        </li>
      </ol>
    </center>
    </div>

    <div><center>
      <h2 id="photo5">Miami</h2>
      <ol>
        <li>
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/123823030.jpg?k=ff787e892b46d1c6a5ab79302afdde3b35b53a4a49e0f9e9ca7619d7994b918b&o=&hp=1"></img>
        </li>
        <li>
          <img src="https://hwy.co/wp-content/uploads/2021/11/wynwood-walls_t20_kjQBxp.jpg"></img>
        </li>
        <li>
          <img src="https://media.cntraveler.com/photos/5a737bf6aeb19b5730310bd8/16:9/w_2240,c_limit/Philip-and-Patricia-Frost-Museum-of-Science__2018_Gulf-Stream-Aquarium-Oculus-@-Frost-Science_Photo-by-Ra-Haus.jpg"></img>
        </li>
        <li>
          <img src="https://scontent-atl3-1.cdninstagram.com/v/t51.29350-15/325692497_701971404758557_6376903115389672774_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=yDrtK_vOjF0AX-Pl_gw&_nc_ht=scontent-atl3-1.cdninstagram.com&edm=APCawUEEAAAA&oh=00_AfD3juk40oIN9jNFqNkGfTd4DqWkWCUk3uQZYf7PkjZudg&oe=64E0220D"></img>
        </li>
      </ol>
    </center>
    </div>
    </>
  )
};

export default App
