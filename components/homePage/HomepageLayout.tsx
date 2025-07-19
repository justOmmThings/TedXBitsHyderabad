import { ReactNode, isValidElement } from "react"

export function HomepageLayout({ children }: { children: ReactNode }) {
    // Check if AboutUs is being rendered as a child
    let bgClassName: string | undefined = undefined;
    if (
        Array.isArray(children)
            ? children.some(
                (child) =>
                    isValidElement(child) &&
                    child.type &&
                    (child.type as any).name === "AboutUs"
            )
            : isValidElement(children) &&
            (children.type as any).name === "AboutUs"
    ) {
        bgClassName = "bg-transparent";
    }
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">{children}</main>
        </div>
    )
} 