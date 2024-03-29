export default function SearchIcon(props?: {className?: string}) {
    return (
        <svg 
            className={[
                "search-icon-component",
                props?.className ? props.className : ""
            ].join(" ")}
            viewBox="0 0 24 24"
        >
            <path 
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    )
}
  
