import type { Meta, StoryObj } from '@storybook/react';

import CombinedSelectAutocomplete from './combinedselectautocomplete.component';


const meta: Meta<typeof CombinedSelectAutocomplete> = {
    component: CombinedSelectAutocomplete,
};

export default meta;
type Story = StoryObj<typeof CombinedSelectAutocomplete>;

const categories = [{ label: "Authored by", value: "authored" }, { label: "Reviewed by", "value": "reviewed" }, { label: "Edited by", value: "edited" }];

export const Basic: Story = {
    args: {
        autoCompleteProps: { hideSearchIcon: true, disabled: false },
        selectedDropdownValue: "authored",
        dropdownOptions: categories,
        title: "Test Title"
    },
};
