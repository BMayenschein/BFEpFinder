const Header = () => {
    return (
<div className="hero mobile:h-64 tablet:h-80  h-auto" style={{backgroundImage: 'url(/img/bf-hero.jpg)'}}>
  <div className="hero-overlay mobile:h-64 tablet:h-80 bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bad Friends Episode Finder</h1>
      <p className="mb-5">Have a favorite moment or bit from the show? Search any word or phrase and the episode you are looking for will be provided with a timestamp.</p>
    </div>
  </div>
</div>
    )
  }

  export default Header