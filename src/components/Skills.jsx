import React from "react";

function Skills() {
    return (
        <div className="flex flex-wrap gap-4 text-size-xl mb-5 justify-center">
            <div
                class="chip"
                className="border-blue-500 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                React
            </div>
            <div
                class="chip"
                className="border-gray-200 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                Express
            </div>
            <div
                class="chip"
                className="border-green-500 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                mongoDB
            </div>
            <div
                class="chip"
                className="border-yellow-500 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                javascript
            </div>
            <div
                class="chip"
                className="border-blue-400 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                typescript
            </div>
            <div
                class="chip"
                className="border-orange-500 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                HTML
            </div>
            <div
                class="chip"
                className="border-blue-300 border-2 p-1 pl-2 pr-2 rounded-full text-l"
            >
                CSS
            </div>
        </div>
    );
}

export default Skills;
