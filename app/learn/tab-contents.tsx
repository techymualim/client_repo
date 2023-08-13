import TabComponent from "@/components/ui/tab"
import { Dispatch, SetStateAction } from "react";
import { Option } from "@/types/option";

const TabContents = ({options, activeSection, setActiveSection}:
    { options: Array<Option>; 
        activeSection: Option | null; 
        setActiveSection: Dispatch<SetStateAction<Option | null>>
    }) => {
    return (
        <TabComponent options={options} selected={activeSection} setSelected={setActiveSection} noMargin />
    )
}

export default TabContents