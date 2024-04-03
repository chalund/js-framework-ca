import Yellow from "../../assets/images/yellow.jpg"


const HeroSection = () => {
  return (
    <div className="flex justify-center mt-10 relative">
      <img
          src={Yellow}
          alt="Hero Image, shoppingbags"
          style={{ maxHeight: '300px', width: '990px', borderRadius: '5px' }}
      />
    </div>
  )
}

export default HeroSection
