import React from 'react'
import Slidercontent from './Slidercontent'

let sliderbar = [
    {
        name: "home",
        icon: <i class="fi fi-rs-user-add"></i>,
    },
    {
        name: "dashborad",
        icon: <i class="fi fi-rs-users"></i>,
    },
    {
        name: "items",
        icon: <i class="fi fi-rs-box-open-full"></i>,
    },
    {
        name: "sales",
        icon: <i class="fi fi-rs-shopping-bag"></i>,
    },
    {
        name: "purchase",
        icon: <i class="fi fi-rs-shopping-bag"></i>,
    },
    {
        name: "report",
        icon: <i class="fi fi-rs-treatment"></i>,
    },
]
let sliderbar1 = [
    {
        name: "home",
        icon: <i class="fi fi-rs-user-add"></i>,
    },
    {
        name: "dashborad",
        icon: <i class="fi fi-rs-users"></i>,
    },
    {
        name: "items",
        icon: <i class="fi fi-rs-box-open-full"></i>,
    },
    {
        name: "sales",
        icon: <i class="fi fi-rs-shopping-bag"></i>,
    },
    {
        name: "purchase",
        icon: <i class="fi fi-rs-shopping-bag"></i>,
    },
    {
        name: "report",
        icon: <i class="fi fi-rs-treatment"></i>,
    },
]


const Slider = () => {
    return (
        <>
            <div className="slider-bar">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo-img">
                            <h1>logo</h1>
                        </div>
                        <div className="slider-text">
                            <h4>general</h4>
                            <ul>
                                {
                                    sliderbar?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <Slidercontent name={val.name} icon={val.icon} />
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                            <h4>general</h4>
                            <ul>
                                {
                                    sliderbar1?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <Slidercontent name={val.name} icon={val.icon} />
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider
