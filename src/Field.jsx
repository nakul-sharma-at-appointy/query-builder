import { TextField } from "@material-ui/core";
import { dequal } from "dequal";
import PropTypes from "prop-types";
import { useState } from "react";
import React from "react";

import Context from "./context";

const Field = React.memo(
    (props) => {
        const context = React.useContext(Context);
        const { id, field, testId } = props;

        const { dispatch } = context;
        const [textField, setTextField] = useState(field);

        return (
            <TextField
                placeholder="Field"
                data-testid={`field-${testId}`}
                size="small"
                variant="outlined"
                value={textField}
                onChange={(event) => {
                    const value = event.target.value;
                    setTextField(value);
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
