export default function FieldWithRange(props: { percentage: number }) {
    return (
        <span className="inventory-field-component__progress-bar">
            <span 
                className="inventory-field-component__progress" 
                style={{left: `${props.percentage*100}%`}}
            />
        </span>
    )
}