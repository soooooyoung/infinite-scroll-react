import { Checkbox, CheckboxOptionType } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface Props {
  onChange?: (keywords: CheckboxValueType[]) => void;
  value: CheckboxValueType[];
  disabled?: CheckboxValueType[];
}

export const SearchFilter = ({ onChange, value, disabled }: Props) => {
  const options: CheckboxOptionType[] = [
    { label: "연재중", value: "scheduled" },
    { label: "완결", value: "completed" },
    { label: "무료회차 3개 이상", value: "freeEp" },
  ];

  const mappedOptions = options.map((option) => {
    if (disabled?.includes(option.value)) {
      return {
        ...option,
        disabled: true,
      };
    }
    return option;
  });

  const onChangeKeyWord = (keywords: CheckboxValueType[]) => {
    if (onChange) onChange(keywords);
  };

  return (
    <Checkbox.Group
      options={mappedOptions}
      onChange={onChangeKeyWord}
      value={value}
    />
  );
};
