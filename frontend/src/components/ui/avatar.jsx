import React from "react"
export function Avatar({ src, alt }) {
    return (
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
            {src ? <img src={src} alt={alt} className="object-cover w-full h-full" /> : <div>{alt}</div>}
        </div>
    );
}
