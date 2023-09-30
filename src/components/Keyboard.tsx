import "../styles/index.css";

const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

type KeyboardProps = {
    disabled?: boolean,
    activeLetters:string[],
    inactiveLetters:string[],
    addGuessedLetter: (letter: string) => void;
}

export function Keyboard({disabled = false, activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps) {
    return <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
    }}>
        {KEYS.map(key => {
            const isActive: boolean = activeLetters.includes(key)
            const isInactive: boolean = inactiveLetters.includes(key)
            return (
                <button 
                    disabled={disabled}
                    key={key}
                    onClick={() => addGuessedLetter(key)}
                    className={`
                        w-[100%]
                        border-black 
                        border-solid
                        border-[3px]
                        aspect-square
                        text-[2.5rem]
                        uppercase
                        p-[.5rem] 
                        cursor-pointer
                        text-black
                        hover:bg-blue-400
                        ${disabled && !isActive ? "hover:bg-white cursor-auto" : ""}
                        ${isActive ? "bg-blue-400 cursor-auto" : ""}
                        ${isInactive ? "opacity-40 hover:bg-white cursor-auto" : ""}
                    `}>
                    {key}
                </button>
            )
        })}
    </div>
}