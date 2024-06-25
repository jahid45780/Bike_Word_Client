import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './styles.css'
const KeenShlider = () => {

    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1500)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )


    return (
        <div>

<div ref={sliderRef} className="keen-slider relative h-[400px]">
        <div className="keen-slider__slide number-slide1"> <img src="https://i.ibb.co/bWQ1B2w/brand-new-shiny-black-retro-chopper-is-parked-brick-building.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide2"> <img src="https://i.ibb.co/jzLD0Dv/amazing-brand-new-motorbike-is-standing-dark-underground-parking.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide3"> <img src="https://i.ibb.co/QCYzZKf/motorcycle-with-helmet.jpg" alt="" /> </div>
        <div className="keen-slider__slide number-slide4"> <img src="https://i.ibb.co/qdjcgP0/view-cool-powerful-motorcycle.jpg" alt="" /> </div>
     
      </div>
            
        </div>
    );
};

export default KeenShlider;