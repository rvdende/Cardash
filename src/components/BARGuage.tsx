interface BARGuageProperties {
    label: string
    min: number
    max: number
    value: number
}

export function BARGuage(properties: BARGuageProperties) {

    var colorGood = "#16B901"

    return <div style={{
        backgroundColor: "#2C2C2C",
        height: 37,
        position: 'relative'
    }}>
        {properties.label}

        <div style={{
            backgroundColor: colorGood,
            position: 'absolute',
            top: 0, left: 0,
            height: 37,
            width: properties.value
        }} />

        <h1 style={{
            fontSize: 50,
            fontFamily: 'monospace',
            color: colorGood,
            position: 'absolute',
            right: 10,
            top: -100
        }}>{Math.round(properties.value)}</h1>
    </div>
}