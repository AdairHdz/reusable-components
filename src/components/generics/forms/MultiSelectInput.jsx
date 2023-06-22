import { FieldArray, useField } from "formik";
import { HoverableListItem } from "../HoverableListItem";
import { useTheme } from "../../../hooks/use-theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * 
 * @param {import('./FormProps').TextInputProps} props
 */
export const MultiSelectInput = (props) => {
    const [field, meta] = useField(props);
    const [selectedItems, setSelectedItems] = useState(props.alreadySelectedItems ?? []);

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
            <div
                style={{
                    marginBottom: "2rem"
                }}
                className="row"
            >
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
                    <FieldArray
                        name={props.name}
                        render={arrayHelpers => (
                            <>
                                <select
                                    className="w-100 fs-6 text-muted mb-3"
                                    style={{
                                        border: "none",
                                        borderRadius: "0.8rem",
                                        padding: "0.3rem 0.9rem",
                                        appearance: "none"
                                    }}
                                    {...field}
                                    {...props}
                                    onChange={(e) => {
                                        const selectedOption = e.target.options.item(e.target.selectedIndex);
                                        const foundIndex = props.values.findIndex(val => val == selectedOption.value);                                        

                                        if (foundIndex === -1) {
                                            arrayHelpers.push(selectedOption.value);
                                            setSelectedItems(prevData => [...prevData, {
                                                id: selectedOption.value,
                                                title: selectedOption.textContent
                                            }]);
                                        }
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
                                {props.values?.map((id, index) => (
                                    <HoverableListItem
                                    key={id}
                                    themeConfig={{
                                        background: {
                                            color: theme.primaryColor,
                                            onHoverColor: theme.primaryColor
                                        }
                                    }}
                                >
                                    <span className="text-white">
                                        {selectedItems.find(item => item.id === id)?.title}
                                    </span>
                                    {props.canDelete && (
                                        <div className="d-flex gap-4">
                                            <FontAwesomeIcon
                                                className="me-3 text-white"
                                                style={{
                                                    fontSize: "0.8rem"
                                                }}
                                                onClick={() => {                                                    
                                                    arrayHelpers.remove(index);
                                                    setSelectedItems(selectedItems.filter(item => item.id !== id));
                                                }}
                                                icon={"fa-solid fa-trash"} />
                                        </div>
                                    )}
                                </HoverableListItem>
                                ))}                                
                            </>
                        )}
                    />
                </div>
            </div>
        </>
    );
};