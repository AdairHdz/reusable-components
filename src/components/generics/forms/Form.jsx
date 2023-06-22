import { Form as FormikForm, Formik } from "formik";
import { TextInput } from "./TextInput";
import { useTheme } from "../../../hooks/use-theme";
import { useFetch } from "../../../hooks/use-fetch";
import { useEffect } from "react";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { Spinner } from "reactstrap";
import { Alert } from "../alerts/Alert";
import styled from "styled-components";





/**
 * 
 * @param {import('./FormProps').FormProps} props 
 * @returns 
 */

export const Form = (props) => {
    const { theme } = useTheme();

    const FormButtons = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
        gap: 1rem;
        

        @media screen and (min-width: 992px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-content: end;
        }
    `;
    const {
        status,
        responseMessage,
        clearMessage,
        isLoading,
        errors,
        postData,
        putData,
        getData,
        data,
    } = useFetch(props.restServiceRequester);

    useEffect(() => {
        if (props?.setServerValidationErrors) {
            props.setServerValidationErrors(errors);
        }
    }, [errors]);

    useEffect(() => {
        if (props.afterSubmitWentOk && data && status === 200) {
            props.afterSubmitWentOk(data, errors);
        }
    }, [data]);

    return (
        <>
            <Formik
                initialValues={props.schema.initialValues}
                validationSchema={props.schema.validationSchema}
                enableReinitialize={props?.enableReinitialize}                
                onSubmit={(values) => {
                    clearMessage();
                    const body = props.formatValuesBeforeSending ? props.formatValuesBeforeSending({ ...values }) : values;
                    if (!props.formPath) {
                        return;
                    }
                    if (props.action === "POST") {
                        return postData(props.formPath?.submitPath, props.formPath?.submitBody ?? body);
                    } else if (props.action === "PUT") {
                        return putData(props.formPath?.submitPath, props.formPath?.submitBody ?? body);
                    }
                    return getData(props.formPath.submitPath);

                }}
            >
                {({ values, setFieldValue, errors, touched}) => (
                    <FormikForm
                        style={{
                            backgroundColor: props.themeConfig?.background?.color ?? theme.secondaryColor,
                            borderRadius: "0.2rem",
                            padding: "3rem"
                        }}
                    >
                        {props.title}
                        {props.children(values, setFieldValue, errors, touched)}
                        <FormButtons className="mt-4">
                            {props.goToPreviousPageAction?.content ? (
                                <>
                                    {props.goToPreviousPageAction.content}
                                </>
                            ) : (
                                <Link to={props.goToPreviousPageAction ? props.goToPreviousPageAction?.path : ".."}
                                // className="w-100"
                                >
                                    <PrimaryButton
                                        style={{ width: "100%" }}
                                    >
                                        <span
                                            style={{ fontSize: "1rem" }}
                                        >
                                            {props.goToPreviousPageAction?.text ?? "Volver a la lista"}
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            )}
                            {isLoading ? (
                                <div className="d-flex justify-content-center align-items-center w-100">
                                    <Spinner
                                        style={{
                                            color: theme.onSecondary
                                        }}
                                    />
                                </div>
                            ) : props.hideSubmitButton ? null : (
                                <>
                                    {props.submitAction?.content ? (
                                        <>
                                            {props.submitAction.content}
                                        </>
                                    ) : (
                                        <PrimaryButton
                                            type="submit"
                                            style={{ width: "100%" }}                                            
                                        >
                                            <span
                                                style={{ fontSize: "1rem" }}
                                            >
                                                {props.submitAction?.text ?? 'Guardar'}
                                            </span>
                                        </PrimaryButton>
                                    )}
                                </>

                            )}
                        </FormButtons>
                    </FormikForm>
                )}
            </Formik>
            <br />
            {!isLoading && status && !props.hideResponseMessage && (
                <Alert
                    status={status}
                    message={responseMessage}
                />
            )}
        </>
    );
};