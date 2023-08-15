export const Subtitle = ({text, blue, mbSm, regular}:{text:string; blue?: boolean; mbSm?: boolean; regular?: boolean}) => {
    return (
    <h2 className={`text-lg ${regular ? '' : 'font-semibold'} ${mbSm ? 'mb-3' : 'mb-10'}  ${blue ? 'text-[#0081DE]' : ''}`}>
        {text}
    </h2>)
}

export const Paragraph = ({text, bold, underline}:{text:string; bold?:boolean; underline?:boolean}) => {
    return (<p className={`text-sm md:text-base mb-10 ${bold ? 'font-bold' : ''} ${underline ? 'underline' : ''}`}>{text}</p>)
}

export const List = ({content}:{content:Array<string>}) => {
    return (
        <ul className="text-sm md:text-base list-disc list-inside mb-10">
            {
                content.map((item, index) => (
                    <li key={item+index} className='mb-3'>{item}</li>
                ))
            }
        </ul>
    )
}