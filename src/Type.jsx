import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { dequal } from "dequal";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

import Context from "./context";

const Type = React.memo(
    (props) => {
        const context = React.useContext(Context);
        // eslint-disable-next-line react/prop-types
        const { id, testId, type } = props;

        const { dispatch, operatorsByType } = context;
        const [myType, setType] = useState({ type: type, label: type });
        const [inputValue, setInputValue] = useState("");
        const typeOptions = [
            { label: "String", value: "String" },
            { label: "Number", value: "Number" },
        ];
        return (
            <Autocomplete
                fullWidth
                data-testid={`field-${testId}`}
                disableClearable={true}
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, value) => {
                    return option.value === value.value;
                }}
                options={typeOptions}
                renderInput={(params) => <TextField {...params} placeholder="Type" size="small" variant="outlined" />}
                style={{ minWidth: 250 }}
                value={myType}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                onChange={(event, selected) => {
                    const value = selected ? selected.value : "";

                    const type = { label: value, value };
                    setType(type);
                    const operators = operatorsByType[value];
                    const operator = operators?.length > 0 ? operators[0].value : null;
                    dispatch({ type: "set-type", id, operator, fieldType: type });
                }}
            />
        );
    },
    (prevProps, nextProps) => {
        // Skip re-rendering if the field didn't change.
        return dequal(prevProps, nextProps);
    }
);

Type.propTypes = {
    field: PropTypes.string,
    id: PropTypes.number.isRequired,
    testId: PropTypes.string.isRequired,
};

Type.whyDidYouRender = false;

export default Type;
