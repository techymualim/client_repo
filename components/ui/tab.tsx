interface Option {
  label: string,
  value: string,
}

const TabComponent = ({ options, selected, setSelected }: { options: Array<Option>; selected: Option; setSelected: (value: Option) => void }) => {

  return (
    <div className="container flex justify-around items-center mt-8 navbar-custom w-full">
      {options.map((option) => (
        <button
          key={option.value}
          className={`p-2 text-white flex flex-col items-center ${selected.value === option.value ? 'relative' : ''
            }`}
          onClick={() => setSelected(option)}
        >
          {option.label}
          {selected.value === option.value && (
            <div className="absolute w-4 h-1 rounded-full bottom-1 bg-primary/100"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TabComponent;
