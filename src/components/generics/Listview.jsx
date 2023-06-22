import { Helmet } from "react-helmet";
import { Container, Row, Col, Spinner } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "./table/Table";
import { useFetch } from "../hooks/use-fetch";
import { ThemeAlert } from "../generics/alerts/ThemeAlert";
import ModalStandard from "./ModalStandard";
import { useTheme } from "../hooks/use-theme";

/**
 * @typedef Resource
 * @property {string} path - The name of the resource to be retrieved from the API.
 * @property {Object} config - Query params or any other config you need
 */

/**
 * @typedef ListviewConfig
 * @property {string} title - Title to be displayed in the page
 * @property {string} helmetTitle - Title to be displayed in the explorer tab
 */

/**
 * @typedef RowFormat
 * @property {string} id
 * @property {Object} content
 *
 */

/**
 * @typedef TableDataFormatter
 * @property {(tableData: Array<Object>) => Array<RowFormat>} formatter
 */

/**
 * @typedef ThemeConfig
 * @property {Object} background
 * @property {string} background.color
 * @property {string} background.onHoverColor
 * @property {Object} border
 * @property {string} border.color
 * @property {string} border.onHoverColor
 * @property {Object} text
 * @property {string} text.color
 * @property {string} text.onHoverColor
 */

/**
 * 
 * @typedef ListviewProps
 * @property {ListviewConfig} listviewConfig
 * @property {JSX.Element} topContent - Data of the button to be displayed
 * @property {Array<import('../context-components/table/Table').Header>} tableHeaders
 * @property {Resource} resource
 * @property {RowFormat} formatter
 * @property {import("../../hooks/use-fetch").RestServiceRequester?} resourceFetcher
 * @property {import("../../hooks/use-fetch").RestServiceRequester?} resourceDeactivator
 * @property {(rowId: number) => Promise<boolean>} onToggleRow
 * @property {Object} tableThemeConfig
 * @property {ThemeConfig} tableThemeConfig.header
 * @property {ThemeConfig} tableThemeConfig.body
 * @property {ThemeConfig} tableThemeConfig.rowActionsButtonsThemeConfig
 */


/**
 * @argument {ListviewProps} props
 */
export const ListView = (props) => {
    const [tableData, setTableData] = useState([]);

    const {
        data,
        getData,
        isLoading,
        responseMessage,
        status
    } = useFetch(props.resourceFetcher);

    const {
        putData: deactivate,
        data: deactivationResponse,
        isLoading: deactivationIsLoading,
        responseMessage: deactivationResponseMessage,
        status: deactivationStatus,
        clearMessage: clearDeactivationResponseMessage,
    } = useFetch(props.resourceDeactivator);

    useEffect(() => {
        getData(props.resource.path, props.resource.config);
    }, []);

    useEffect(() => {
        if (data) {
            setTableData(data);
        }
    }, [data]);


    const {
        theme
    } = useTheme();

    const [rowToBeDeleted, setRowToBeDeleted] = useState({
        rowId: null,
        deletionPath: ""
    });  

    const [alreadyClickedSubmit, setAlreadyClickedSubmit] = useState(false);

    useEffect(() => {
        if(deactivationStatus === 200) {
            getData(props.resource.path, props.resource.config);
        }
    }, [deactivationStatus, deactivationResponseMessage, deactivationResponse]);

    return (
        <>            
            <Helmet>
                <title>
                    {import.meta.env.VITE_PAGE_TITLE} | {props.listviewConfig.helmetTitle}
                </title>
            </Helmet>
            <ModalStandard
                isOpen={rowToBeDeleted?.rowId}
                toggle={() => {
                    setAlreadyClickedSubmit(false);                    
                    clearDeactivationResponseMessage();
                    setRowToBeDeleted({
                        rowId: null,
                        deletionPath: ""
                    });
                }}
                submit={(deactivationIsLoading || alreadyClickedSubmit) ? undefined : () => {
                    setAlreadyClickedSubmit(true);
                    deactivate(rowToBeDeleted.deletionPath);
                }}
            >
                <p>
                    ¿Está seguro?
                </p>
                {deactivationStatus && deactivationResponseMessage && (
                    <ThemeAlert
                        message={deactivationResponseMessage}
                        status={deactivationStatus}
                    />
                )}
            </ModalStandard>
            <Container fluid>
                <Row className="align-items-center mb-3">
                    <Col sm={12} lx="auto" className="me-auto">
                        <p
                            className="fs-2"
                            style={{
                                color: theme.primaryColor
                            }}
                        >{props.listviewConfig.title}</p>
                        {props.topContent}
                    </Col>
                </Row>
                <Row className="p-2">
                    {isLoading ? (
                        <Spinner className="mx-auto" />
                    ) : (
                        <Table
                            setRowId={(rowId, deletionPath) => {
                                setRowToBeDeleted({
                                    rowId,
                                    deletionPath
                                });
                            }}
                            themeConfig={{
                                tableHeaderThemeConfig: props.tableThemeConfig?.header,
                                tableBodyThemeConfig: props.tableThemeConfig?.body,
                                rowActionsButtonsThemeConfig: props.tableThemeConfig?.rowActionsButtonsThemeConfig
                            }}
                            tableStructure={{
                                headers: props.tableHeaders,
                                rows: props.formatter(tableData)
                            }}
                        />
                    )}
                </Row>
                {status && status !== 200 && (
                    <ThemeAlert
                        message={responseMessage}
                        status={status}
                    />
                )}
            </Container>
        </>
    );
};