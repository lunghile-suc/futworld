const Video = ({ video }) => {
    return (  
        <div className="text-center">
            <h4 className="text-xl">{video.competition}</h4>
            <h1 className="text-2xl pt-2">{video.title}</h1>
            {video.videos.map((video, i) => {
                return(
                    <div key={i} className="my-12 " dangerouslySetInnerHTML={{__html: video.embed}}></div>
                )
            })}
        </div>
    );
}
 
export default Video;