import { useField } from "formik";
import React from "react";
import { useTheme } from "../../../hooks/use-theme";



/**
 * 
 * @param {import('./FormProps').TextInputProps} props
 * 
 * @returns 
 */


export const TextInput = (props) => {
    const [field, meta] = useField(props);
    const {theme} = useTheme();
    return (
        <>
            <div className="row mb-2" style={props.style}>
                <div className={`${props.label ? 'col col-12 col-md-5' : 'd-none'}`}>                    
                    <label
                        htmlFor={props.id || props.name}
                        style={{
                            color: props.labelConfig?.text?.color ?? theme.onPrimary
                        }}
                    >
                        {props.label}
                    </label>
                </div>
                <div className={`${props.label} ? 'col col-12 col-md-7' : 'col-12`}>
                    <input
                        className="w-100"
                        style={{
                            borderColor: props.inputConfig?.border?.color,
                            borderWidth: props.inputConfig?.border?.width,
                            borderStyle: props.inputConfig?.border?.style,
                            border: !props.inputConfig?.border && "none",
                            borderRadius: "0.8rem",
                            padding: "0.3rem 0.9rem",
                            backgroundColor: "white"
                        }}
                        {...field}
                        {...props}
                    />
                    {meta.touched && meta.error && (
                        <div className="mt-1 mb-3" style={{
                            color: props.errorConfig?.text?.color
                        }}>{meta.error}</div>
                    )}
                    {props.serverValidationError && (
                        <div className="mt-1 mb-3" style={{
                            color: props.errorConfig?.text?.color
                        }}>{props.serverValidationError}</div>
                    )}
                </div>
            </div>
        </>
    );
};