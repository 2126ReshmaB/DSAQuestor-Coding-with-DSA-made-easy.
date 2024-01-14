import React, { useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
  details: string; // Additional details for each option
}

const Dropdown: React.FC = () => {
  const [selectedOption1, setSelectedOption1] = useState<DropdownOption | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<DropdownOption | null>(null);
  const [selectedOption3, setSelectedOption3] = useState<DropdownOption | null>(null);

  const options: DropdownOption[] = [
  { value: 'option1', label: 'Click', details: 'Step1 :- Click on contest from menu bar of LeetCode or <a href="https://leetcode.com/contest">https://leetcode.com/contest</a> \n Step2 :- LeetCode conduct two contest "Weekly" or "BiWeekly" \n Step3 :- Register for contents by providing require details. \n Step4 :- On the day of contest again visit https://leetcode.com/contest, and you will find count down for contest. Please wait for contenst. \n Step5 :- When contests begins, you have to scroll down and questions link will be thereStep6 :- Start contest' },
  ];
  const options1: DropdownOption[] = [
    { value: 'option1', label: 'Click', details: 'GFG Weekly Coding Contest \n Participate every Sunday at 7 PM' },
    ];
  const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue) || null;
    setSelectedOption1(selectedOption);
  };

  const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue) || null;
    setSelectedOption2(selectedOption);
  };

  const handleSelectChange3 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = options1.find(option => option.value === selectedValue) || null;
    setSelectedOption3(selectedOption);
  };

  const handleDetailsClick = (selectedOption: DropdownOption | null) => {
    if (selectedOption) {
      alert(selectedOption.details);
    }
  };
  const handleDetailsClick1 = (selectedOption: DropdownOption | null) => {
    if (selectedOption) {
      alert(selectedOption.details);
    }
  };

  return (
    <div className="py-3">
      <select
        className="text-white bg-dark-layer-2"
        id="dropdown1"
        value={selectedOption1 ? selectedOption1.value : ''}
        onChange={handleSelectChange1}
      >
        <option value="" disabled>
          Leetcode Bi-weekly contest
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedOption1 && (
        <p>
          Selected option: {selectedOption1.label}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => handleDetailsClick(selectedOption1)}
          >
            (Click for details)
          </span>
        </p>
      )}

      <select
        className="text-white bg-dark-layer-2"
        id="dropdown2"
        value={selectedOption2 ? selectedOption2.value : ''}
        onChange={handleSelectChange2}
      >
        <option value="" disabled>
          Leetcode weekly contest
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedOption2 && (
        <p>
          Selected option: {selectedOption2.label}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => handleDetailsClick(selectedOption2)}
          >
            (Click for details)
          </span>
        </p>
      )}

      <select
        className="text-white bg-dark-layer-2"
        id="dropdown3"
        value={selectedOption3 ? selectedOption3.value : ''}
        onChange={handleSelectChange3}
      >
        <option value="" disabled>
          GFG weekly contest
        </option>
        {options.map((option1) => (
          <option key={option1.value} value={option1.value}>
            {option1.label}
          </option>
        ))}
      </select>

      {selectedOption3 && (
        <p>
          Selected option: {selectedOption3.label}{' '}
          <span
            style={{ color: 'blue', cursor: 'pointer' }}
            onClick={() => handleDetailsClick1(selectedOption3)}
          >
            (Click for details)
          </span>
        </p>
      )}
    </div>
  );
};


export default Dropdown;
