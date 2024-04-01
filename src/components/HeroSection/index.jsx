import HeroImage from "../../assets/images/bags.jpg"

const HeroSection = () => {
  return (
    <div className="flex justify-center m-10 relative">
    <img
        src={HeroImage}
        alt="Hero Image, shoppingbags"
        style={{ maxHeight: '300px', width: '990px' }}
    />
    <div className="absolute top-6 right-1/4 p-4 text-white">
        <h2 className="text-lg">Welcome</h2>
        <p className="text-sm">Find your treasures</p>
    </div>
</div>
  )
}

export default HeroSection
