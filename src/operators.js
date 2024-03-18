export const operators = [
    {
        label: "equal to",
        value: "equal",
        types: ["Number", "String"],
    },
    {
        label: "not equal to",
        value: "not_equal",
        types: ["Number", "String"],
    },
    {
        label: "contains",
        value: "contains",
        types: ["String"],
    },
    {
        label: "does not contain",
        value: "not_contains",
        types: ["String"],
    },
    {
        label: "less than",
        value: "less",
        types: ["Number"],
    },
    {
        label: "greater than",
        value: "greater",
        types: ["Number"],
    },
    {
        label: "less or equal to",
        value: "less_equal",
        types: ["Number"],
    },
    {
        label: "greater or equal to",
        value: "greater_equal",
        types: ["Number"],
    },
    // {
    //     label: "in",
    //     value: "in",
    //     types: ["multiselect"],
    // },
    // {
    //     label: "not in",
    //     value: "not_in",
    //     types: ["multiselect"],
    // },
    {
        label: "is null",
        value: "null",
        types: ["Number", "String"],
    },
    {
        label: "is not null",
        value: "not_null",
        types: ["Number", "String"],
    },
];

export default operators;
