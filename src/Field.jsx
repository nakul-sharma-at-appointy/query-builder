import { TextField } from "@material-ui/core";
// import { Autocomplete } from "@material-ui/lab";
import { dequal } from "dequal";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

import Context from "./context";

const Field = React.memo(
    (props) => {
        // const [textField, setTextField] = useState();
        const context = React.useContext(Context);
        const { id, field, testId } = props;

        // const { dispatch, filtersByValue } = context;
        // const filter = field ? filtersByValue[field] : null;
        // const [textField, setTextField] = useState(filter);

        const { dispatch } = context;
        // const filter = field ? filtersByValue[field] : null;
        const [textField, setTextField] = useState(field);

        // console.log(filter?.value);
        return (
            // <Autocomplete
            //     fullWidth
            //     data-testid={`field-${testId}`}
            //     disableClearable={true}
            //     groupBy={(option) => option.group}
            //     getOptionLabel={(option) => option.label}
            //     getOptionSelected={(option, value) => {
            //         return option.value === value.value;
            //     }}
            //     options={flattenedFilters}
            // renderInput={(params) => <TextField {...params} placeholder="Field" size="small" variant="outlined" />}
            //     style={{ minWidth: 250 }}
            //     value={filter}
            //     onChange={(event, selected) => {
            //         const value = selected ? selected.value : null;
            //         const { type } = filtersByValue[value];
            //         const operators = operatorsByType[type];
            //         const operator = operators?.length > 0 ? operators[0].value : null;
            //         dispatch({ type: "set-field", id, operator, value });
            //     }}
            // />
            <TextField
                placeholder="Field"
                data-testid={`field-${testId}`}
                size="small"
                variant="outlined"
                value={textField}
                onChange={(event) => {
                    const value = event.target.value;
                    setTextField(value);

                    // const { type } = filtersByValue[value] ?? "";
                    // console.log("type", type);
                    // console.log("Change: ", value);
                    // const operators = operatorsByType[type];
                    // console.log("Operator: ", operators);
                    // const operator = operators?.length > 0 ? operators[0].value : null;

                    dispatch({ type: "set-field", id, value });
                }}
            />
        );
    },
    (prevProps, nextProps) => {
        // Skip re-rendering if the field didn't change.
        return dequal(prevProps, nextProps);
    }
);

Field.propTypes = {
    field: PropTypes.string,
    id: PropTypes.number.isRequired,
    testId: PropTypes.string.isRequired,
};

Field.whyDidYouRender = false;

export default Field;
