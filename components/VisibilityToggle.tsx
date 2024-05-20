import {ReactNode} from "react";

interface VisibilityToggleProps {
    isVisible: boolean
    className: string
    children: ReactNode
}

export default function VisibilityToggle({isVisible, className, children} : VisibilityToggleProps) {
    return (
        <div className={`${isVisible ? "visible" : "hidden"} ${className}`}>
            {children}
        </div>
    )
}