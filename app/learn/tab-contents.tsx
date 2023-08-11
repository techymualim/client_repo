import TabComponent from "@/components/ui/tab"

interface Option {
    label: string,
    value: string,
}

const TabContents = ({options, activeSection, setActiveSection}:{ options: Array<Option>; activeSection:Option | string | null; setActiveSection: (value: string | null) => void }) => {
    return (
        <TabComponent options={options} selected={activeSection} setSelected={setActiveSection} simple noMargin />
    )
}

export default TabContents