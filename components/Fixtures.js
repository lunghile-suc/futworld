const Fixtures = () => {
    const liveMatches = `<iframe src="https://www.scorebat.com/embed/livescore/" frameborder="0" width="600" height="760" allowfullscreen allow='autoplay; fullscreen' style="width:100%;height:760px;overflow:hidden;display:block;" class="_scorebatEmbeddedPlayer_"></iframe><script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://www.scorebat.com/embed/embed.js?v=arrv'; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'scorebat-jssdk'));</script>`
    return (
        <div className=" bg-gray-300 p-6">
            <h1 className="lg:text-5xl text-center my-12">Fixtures</h1>
            <div className="" dangerouslySetInnerHTML={{__html: liveMatches}}></div>
        </div>
    );
}

export default Fixtures;