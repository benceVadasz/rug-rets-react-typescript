import React from 'react'

type OptionValue = string | number;

type Option<T extends OptionValue> = {
    value: T;
    label: string;
};

type Props<T extends OptionValue> = {
    options: Option<T>[];
    value: T;
    onChange: (value: T) => void;
};

const Select = <T extends OptionValue>(props: Props<T>) => {

    const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const {selectedIndex} = e.currentTarget;
        const selectedOption = props.options[selectedIndex];
        props.onChange(selectedOption.value);
    }

    return (
        <select value={props.value} onClick={handleOnChange}>
            {props.options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Select;