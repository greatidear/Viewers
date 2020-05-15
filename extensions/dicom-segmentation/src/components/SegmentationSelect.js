import React from 'react';
import Select from 'react-select';

const SegmentationSelect = ({ value, formatOptionLabel, options }) => (
  <Select
    value={value}
    formatOptionLabel={formatOptionLabel}
    styles={segmentationSelectStyles}
    options={options}
  />
);

const computedstyle = getComputedStyle(document.body);
const uiGrayDarker = computedstyle.getPropertyValue('--ui-gray-darker');
const activeColor = computedstyle.getPropertyValue('--active-color');
const defaultColor = computedstyle.getPropertyValue('--default-color');
const uiGrayDark = computedstyle.getPropertyValue('--ui-gray-dark');

const segmentationSelectStyles = {
  singleValue: (base, state) => ({
    ...base,
    width: '100%',
  }),
  control: (base, state) => ({
    ...base,
    cursor: 'pointer',
    background: uiGrayDarker,
    borderRadius: state.isFocused ? '5px 5px 5px 5px' : 5,
    borderColor: state.isFocused ? activeColor : defaultColor,
    boxShadow: state.isFocused ? null : null,
    minHeight: '50px',
    '&:hover': {
      borderColor: activeColor,
    },
  }),
  menu: base => ({
    ...base,
    borderRadius: 5,
    background: uiGrayDarker,
  }),
  option: (base, state) => ({
    ...base,
    cursor: 'pointer',
    '&:first-of-type': {
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    '&:last-of-type': {
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    background: state.isSelected ? uiGrayDark : uiGrayDarker,
    '&:hover': {
      background: uiGrayDark,
    },
  }),
};

export default SegmentationSelect;
