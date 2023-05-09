import React from "react";

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <img src="./assets/elias.jpg" alt="" className="w-64 mb-6" />
            <h1 className="text-4xl md:text-4xl dark:text-white mb-1 md:mb-3 font-bold">
                Elias Kihlstenius
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Junior software Engineer & Web Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                nulla ex ea dicta sapiente corrupti explicabo a similique odio
                praesentium reprehenderit cum nihil earum, deserunt distinctio
                error dolor tenetur corporis? Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Rem accusamus, mollitia hic
                laborum laboriosam optio sed reiciendis expedita commodi sunt
                quod aspernatur amet quasi vitae velit ab atque tempore ipsam.
            </p>
        </div>
    );
}

export default Intro;
