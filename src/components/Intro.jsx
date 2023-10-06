import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TypeAnimation } from "react-type-animation";

function Intro() {
    return (
        <div className="flex flex-col md:flex-row  items-center justify-center">
            <div className="flex items-center justify-center text-center pt-20 pb-6">
                <LazyLoadImage
                    src="./assets/elias.jpg"
                    alt=""
                    className="w-64 mb-6 rounded-xl"
                />
            </div>
            <div className="border-red-500 border-2 rounded-xl p-4 m-5">
                <TypeAnimation
                    sequence={[
                        // Same String at the start will only be typed once, initially
                        "Elias Kihlstenius",
                        1000,
                        "I'm a software developer",
                        1000,
                        "I'm a coder",
                        1000,
                        "This is my portfolio",
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em" }}
                    repeat={Infinity}
                />
                <p className="text-base md:text-xl mb-3 font-medium text-orange-700">
                    Junior software Engineer & Web Developer
                </p>
                <p className="text-sm max-w-xl mb-6 font-bold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa nulla ex ea dicta sapiente corrupti explicabo a
                    similique odio praesentium reprehenderit cum nihil earum,
                    deserunt distinctio error dolor tenetur corporis? Lorem
                    ipsum dolor sit, amet consectetur adipisicing elit. Rem
                    accusamus, mollitia hic laborum laboriosam optio sed
                    reiciendis expedita commodi sunt quod aspernatur amet quasi
                    vitae velit ab atque tempore ipsam.
                </p>
            </div>
        </div>
    );
}

export default Intro;
