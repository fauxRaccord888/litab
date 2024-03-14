export default function MoreIcon(props?: {className?: string}) {
    return (
        <svg 
            className={`more-icon-component ${props?.className}`}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
        >
            <path d="M8,12a2,2,0,1,1-2-2A2,2,0,0,1,8,12Zm10-2a2,2,0,1,0,2,2A2,2,0,0,0,18,10Zm-6,0a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"/>
        </svg>
    )
  }
  