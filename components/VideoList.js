import { useState } from "react";
import Video from "./Video";

const VideoList = ({ data }) => {

    // convert object data to array data
    const dataIntoArray = Object.entries(data);

    const [active, setActive] = useState(null);

    const toggle = (index) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index)
    }

    return (
        <div>
            {
                dataIntoArray && dataIntoArray[0][1].map((video, index) => {
                    if (video.competition == "ENGLAND: Premier League") {
                        return (
                            <div className="grid">
                                <Video video={video} key={index} />
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default VideoList;
