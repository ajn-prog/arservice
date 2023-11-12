import { SelectProps, Select } from '@mantine/core';
import { useMemo } from 'react';

import { useInstallations } from '../api';

type Props = Omit<SelectProps, 'data'>;

export const InstallationSelect: React.FC<Props> = ({ ...props }) => {
  const { data } = useInstallations({ params: { limit: 0 } });

  const installations = useMemo(() => {
    if (!data) return [];

    return data.data.map(({ id, product, serial_number }) => ({
      label: `${product.name} (${serial_number})`,
      value: id.toString(),
    }));
  }, [data]);

  return <Select {...props} data={installations} searchable />;
};

// import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';
// import React, { useState } from 'react';

// const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

// export const InstallationSelect: React.FC = () => {
//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//     onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
//   });

//   const [search, setSearch] = useState('');
//   const [value, setValue] = useState<string[]>([]);

//   const handleValueSelect = (val: string) =>
//     setValue((current) =>
//       current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
//     );

//   const handleValueRemove = (val: string) =>
//     setValue((current) => current.filter((v) => v !== val));

//   const values = value.map((item) => (
//     <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
//       {item}
//     </Pill>
//   ));

//   const options = groceries
//     .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
//     .map((item) => (
//       <Combobox.Option value={item} key={item} active={value.includes(item)}>
//         <Group gap="sm">
//           {value.includes(item) ? <CheckIcon size={12} /> : null}
//           <span>{item}</span>
//         </Group>
//       </Combobox.Option>
//     ));

//   return (
//     <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
//       <Combobox.DropdownTarget>
//         <PillsInput onClick={() => combobox.openDropdown()}>
//           <Pill.Group>
//             {values}

//             <Combobox.EventsTarget>
//               <PillsInput.Field
//                 onFocus={() => combobox.openDropdown()}
//                 onBlur={() => combobox.closeDropdown()}
//                 value={search}
//                 placeholder="Search values"
//                 onChange={(event) => {
//                   combobox.updateSelectedOptionIndex();
//                   setSearch(event.currentTarget.value);
//                 }}
//                 onKeyDown={(event) => {
//                   if (event.key === 'Backspace' && search.length === 0) {
//                     event.preventDefault();
//                     handleValueRemove(value[value.length - 1]);
//                   }
//                 }}
//               />
//             </Combobox.EventsTarget>
//           </Pill.Group>
//         </PillsInput>
//       </Combobox.DropdownTarget>

//       <Combobox.Dropdown>
//         <Combobox.Options>
//           {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
//         </Combobox.Options>
//       </Combobox.Dropdown>
//     </Combobox>
//   );
// };
