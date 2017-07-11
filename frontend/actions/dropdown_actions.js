export const OPEN_DROPDOWN = 'OPEN_DROPDOWN';
export const CLOSE_DROPDOWN = 'CLOSE_DROPDOWN';

export const openDropdown = () => {
  return {
    type: OPEN_DROPDOWN
  };
};

export const closeDropdown = () => {
  return {
    type: CLOSE_DROPDOWN
  };
};
