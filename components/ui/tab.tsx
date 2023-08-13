
interface Option {
  label: string,
  value: string,
}

const TabComponent = ({ options, selected, setSelected, simple, noMargin }: { 
  options: Array<Option>; 
  selected: Option | string | null; 
  setSelected: (value: Option | string | null) => void; 
  simple?: boolean; 
  noMargin?: boolean; }) => {

  const selectedOption = simple ? selected : selected?.value;

  return (
    <div className={`container flex justify-around items-center ${noMargin ? '' : 'my-8'} navbar-custom w-full`}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`md:p-2 text-white text-[12px] md:text-[15px] flex flex-col items-center ${selectedOption === option.value ? 'relative' : ''
            }`}
          onClick={() => setSelected(simple ? option.value : option)}
        >
          <div className="flex items-center justify-center pt-3 md:pt-0">
            <span className="mb-2 md:mb-0">{option.label}</span>
            {selectedOption === option.value && (
              <div className="absolute w-4 h-1 rounded-full bottom-1 bg-primary/100"></div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
