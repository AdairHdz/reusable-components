import { Alert } from "../components/generics/alerts/Alert";
import { ButtonVariants } from "../components/generics/buttons/ButtonProps";
import { PrimaryButton } from "../components/generics/buttons/PrimaryButton";
import { SecondaryButton } from "../components/generics/buttons/SecondaryButton";
import { TertiaryButton } from "../components/generics/buttons/TertiaryButton";
import { Table } from "../components/generics/table/Table";
import { Form } from "../components/generics/forms/Form";
import { TextInput } from "../components/generics/forms/TextInput";
import * as Yup from "yup";
import {SelectInput} from "../components/generics/forms/SelectInput";
import {TextArea} from "../components/generics/forms/TextArea";
import {MultiSelectInput} from "../components/generics/forms/MultiSelectInput";

export const ComponentsShowcase = () => {
    return (
        <>
            <section>
                <h1>Botones</h1>
                <article>
                    <h2>
                        Outlined
                    </h2>
                    <div className="d-flex gap-5">
                        <div>
                            <p>
                                Color primario
                            </p>
                            <PrimaryButton
                                variant={ButtonVariants.OUTLINED}
                            >
                                Content
                            </PrimaryButton>
                        </div>
                        <div>
                            <p>
                                Color secundario
                            </p>
                            <SecondaryButton
                                variant={ButtonVariants.OUTLINED}
                            >
                                Content
                            </SecondaryButton>
                        </div>
                        <div>
                            <p>
                                Color terciario
                            </p>
                            <TertiaryButton
                                variant={ButtonVariants.OUTLINED}
                            >
                                Content
                            </TertiaryButton>
                        </div>
                    </div>
                </article>
                <article>
                    <h2>
                        Regular
                    </h2>
                    <div className="d-flex gap-5">
                        <div>
                            <p>
                                Color primario
                            </p>
                            <PrimaryButton

                            >
                                Content
                            </PrimaryButton>
                        </div>
                        <div>
                            <p>
                                Color secundario
                            </p>
                            <SecondaryButton

                            >
                                Content
                            </SecondaryButton>
                        </div>
                        <div>
                            <p>
                                Color terciario
                            </p>
                            <TertiaryButton

                            >
                                Content
                            </TertiaryButton>
                        </div>
                    </div>
                </article>
            </section>
            <section>
                <h1>Alerts</h1>
                <Alert
                    message="Mensaje de éxito"
                    status={200}
                />
                <Alert
                    message="Mensaje de error"
                    status={400}
                />
            </section>
            <section>
                <h1>Tablas</h1>
                <Table
                    tableStructure={{
                        headers: [
                            {
                                title: "Cabecera 1",
                                filter: {
                                    filterType: "text",
                                    key: "a"
                                }
                            },
                            {
                                title: "Cabecera 2",
                            },
                            {
                                title: "Cabecera 3",
                            },
                        ],
                        rows: [
                            {
                                id: "1",
                                content: {
                                    fieldOne: "Celda 1",
                                    fieldTwo: "Celda 1",
                                    fieldThree: "Celda 1",
                                }
                            }
                        ]
                    }}
                />
            </section>
            <section>
                <h1>
                    Formularios
                </h1>
                <Form
                    schema={{
                        initialValues: {
                            name: ""
                        },
                        validationSchema: Yup.object({
                            name: Yup.string()
                                .required("")
                        })
                    }}
                >
                    {(formValues, setFieldValue, formErrors) => (
                        <>
                            <TextInput
                                label="Fecha de inicio de Onboarding"
                                placeholder={"Ingrese fecha de inicio de Onboarding"}
                                serverValidationError={null}
                                name="start_date"                                                            
                            />
                            <TextInput
                                label="Fecha de inicio de Onboarding"
                                placeholder={"Ingrese fecha de inicio de Onboarding"}
                                serverValidationError={null}
                                name="start_date"                            
                                type="date"
                            />
                            <SelectInput
                                label="sasa"
                                placeholder="asasd"
                                serverValidationError={null}
                                name="dasdas"                                
                                options={[
                                    {
                                        name: "aaa",
                                        value: "bbb"
                                    }
                                ]}
                            />
                            <TextArea
                                label="asa"
                                name="dfkg"
                                serverValidationError={null}
                            />
                            <MultiSelectInput                            
                                // values={["a"]}
                                label="Multiselect"
                                name="label"
                                placeholder="Placeholder"
                                serverValidationError={null}
                                options={[
                                    {
                                        name: "a",
                                        value: "a"
                                    },
                                    {
                                        name: "b",
                                        value: "b"
                                    },       
                                ]}
                            />
                        </>
                    )}
                </Form>
            </section>
        </>
    )
};