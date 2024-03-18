import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { dequal } from "dequal";
import PropTypes from "prop-types";
import React from "react";

import Context from "./context";
import operators from "./operators";

const Operator = React.memo(
    (props) => {
        function getTypeByOperator(operatorValue) {
            const operator = operators.find((operator) => operator.value === operatorValue);
            return operator ? operator.types[0] : null;
        }

        const context = React.useContext(Context);
        const { field, id, operator, testId } = props;

        const { dispatch, operatorsByType, operatorsByValue } = context;

        const options = field ? operatorsByType[getTypeByOperator(operator)] : [];
        const value = operator ? operatorsByValue[operator] : null;

        return (
            <Autocomplete
                fullWidth
                data-testid={`operator-${testId}`}
                disableClearable={true}
                getOptionLabel={(option) => option.label}
                getOptionSelected={(option, value) => option.value === value.value}
                options={options}
                renderInput={(params) => (
                    <TextField {...params} placeholder="Choose Condition" size="small" variant="outlined" />
                )}
                style={{ minWidth: 200 }}
                value={value}
                onChange={(event, selected) => {
                    const { value } = selected;
                    dispatch({ type: "set-operator", id, value });
                }}
            />
        );
    },
    (prevProps, nextProps) => {
        // Skip re-rendering if the operator didn't change.
        return dequal(prevProps, nextProps);
    }
);

Operator.propTypes = {
    field: PropTypes.string,
    id: PropTypes.number.isRequired,
    operator: PropTypes.string,
    testId: PropTypes.string.isRequired,
};

Operator.whyDidYouRender = false;

export default Operator;
