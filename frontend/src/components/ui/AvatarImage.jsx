import React from "react";

export function AvatarImage({ src, alt, className }) {
    return (
        <img
            src={src}
            alt={alt || "Avatar"}
            className={`object-cover w-full h-full ${className}`}
        />
    );
}
