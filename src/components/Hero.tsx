"use client"
import { WavyBackground } from "./ui/wavy-background"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Hero() {

    useGSAP(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".home",
                start: "top top",
                end: "bottom top",
                scrub: 3,
                pin: true,
            }
        })
        tl.to(".vid",{
            clipPath: 'circle(0% at 50% 50%)'
        },'a')
        tl.to(".bg",{
            scale: 1
        },'a')
        tl.to(".lt",{
            x: -250,
            delay: 0.1
        },'b')
        tl.to(".rt",{
            x: 250,
            delay: 0.1
        },'b')
    })

  return (
    <div className="home w-full h-screen relative overflow-hidden">
      <div className="vid z-[3] w-full h-full overflow-hidden" style={{clipPath: 'circle(100% at 50% 50%)'}}>
        <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="abstractbg.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="bg z-[-1] scale-[3] w-full h-screen absolute top-0 left-0">
        <WavyBackground>
            <div className="flex flex-col gap-5">
                <div className="lt marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="rt -translate-x-[10%] marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="lt marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="rt -translate-x-[10%] marqueecontainer flex gap-5 font-['PP_Neue_Machina_Inktrap_Medium']">
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="elem flex gap-5">
                        <h3 className="text-8xl font-semibold ">
                            quikcss
                        </h3>
                        <div className="w-[5rem] h-[5rem] overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
        </WavyBackground>
      </div>
    </div>
  )
}

export default Hero
