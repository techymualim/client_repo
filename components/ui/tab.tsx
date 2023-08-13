import { Dispatch, SetStateAction } from "react";
import { Option } from "@/types/option";

const TabComponent = ({ options, selected, setSelected, noMargin }: { 
  options: Array<Option>; 
  selected: Option | null; 
  setSelected: Dispatch<SetStateAction<Option | null>>; 
  noMargin?: boolean; }) => {

  return (
    <div className={`container flex justify-around items-center ${noMargin ? '' : 'my-8'} navbar-custom w-full`}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`md:p-2 text-white text-[12px] md:text-[15px] flex flex-col items-center ${selected?.value === option.value ? 'relative' : ''
            }`}
          onClick={() => setSelected(option)}
        >
          <div className="flex items-center justify-center pt-3 md:pt-0">
            <span className="mb-2 md:mb-0">{option.label}</span>
            {selected?.value === option.value && (
              <div className="absolute w-4 h-1 rounded-full bottom-1 bg-primary/100"></div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
