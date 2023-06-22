import { useField } from "formik";
import React, { useState } from "react";
import { useTheme } from "../../../hooks/use-theme";

/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color 
 * @property {Object} border
 * @property {string} border.color 
 * @property {Object} text
 * @property {string} text.color 
 */

/**
 * @typedef Option
 * @property {string} value
 * @property {string} name
 * @property {boolean} disabled
 * @property {boolean} selected
 */

/**
 * @typedef TextInputProps
 * @property {ThemeConfig} labelConfig
 * @property {ThemeConfig} inputConfig
 * @property {ThemeConfig} errorConfig
 * @property {string} label
 * @property {string} id
 * @property {string} name
 * @property {string} placeholder
 * @property {string} serverValidationError 
 * @property {Array<Option>} options 
 */

/**
 * 
 * @param {TextInputProps} props
 * 
 * @returns 
 */
export const SelectInput = (props) => {
    const [field, meta] = useField(props);

    const { theme } = useTheme();    

    const renderOptions = () => {
        const options = [
            <option
                key={null}
                value={null}
                disabled={true}
                selected={true}
            >
                {props.placeholder}
            </option>
        ];
        if (props.options) {
            const opt = props.options?.map(option => (
                <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    selected={option.selected}
                >
                    {option.name}
                </option>
            ));
            options.push(...opt);
        }
        return options;
    };

    return (
        <>
            <div className="row mb-2">
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
                    <select
                        className="w-100 fs-6 text-muted"
                        style={{
                            borderColor: props.inputConfig?.border?.color,
                            borderWidth: props.inputConfig?.border?.width,
                            borderStyle: props.inputConfig?.border?.style,
                            border: !props.inputConfig?.border && "none",
                            borderRadius: "0.8rem",
                            padding: "0.3rem 0.9rem",
                            // appearance: "none",
                            // position: "relative"
                        }}
                        {...field}
                        {...props}
                        onChange={(e) => {
                            field.onChange(e);
                            props.onChange(e.target.value);
                        }}
                    >
                        {renderOptions()}                        
                    </select>
                    {meta.touched && meta.error && (
                        <div className="mb-3" style={{
                            color: props.errorConfig?.text?.color
                        }}>{meta.error}</div>
                    )}
                    {props.serverValidationError && (
                        <div className="mb-1" style={{
                            color: props.errorConfig?.text?.color
                        }}>{props.serverValidationError}</div>
                    )}

                </div>
            </div>
        </>
    );
};