import React from "react"
export function Card({ children, className }) {
    return <div className={`bg-white shadow rounded-md ${className}`}>{children}</div>
}

export function CardHeader({ children }) {
    return <div className="border-b px-4 py-2">{children}</div>
}

export function CardContent({ children }) {
    return <div className="p-4">{children}</div>
}

export function CardTitle({ children }) {
    return <h3 className="text-lg font-semibold">{children}</h3>
}

export function CardDescription({ children }) {
    return <p className="text-sm text-gray-500">{children}</p>
}
