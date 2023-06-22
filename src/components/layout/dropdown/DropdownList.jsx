import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/use-theme';
import { DropdownItemTypes } from './DropdownProps';


/**
 * 
 * @param {import('./DropdownProps').DropdownListProps} props 
 * @returns 
 */
export const DropdownList = (props) => {
    const {
        theme
    } = useTheme();
    return (
        <div
            style={{
                position: "absolute",
                top: "100%",
                minWidth: "100%",
                padding: "1rem",
                boxShadow: "2px 2px 5px #777"
            }}
        >
            <ul
                style={{
                    listStyle: "none"
                }}
            >
                {props.items?.map(item => (
                    <>
                        {item.type === DropdownItemTypes.LINK ? (
                            <Link
                                key={item?.text}
                                to={item.path}
                            >
                                <li
                                    style={{
                                        color: theme.primaryColor,
                                        borderBottom: "1px solid #ddd",
                                        padding: "0.5rem",
                                        marginBottom: "0.2rem",
                                        display: "flex",
                                        gap: "1rem"
                                    }}

                                >
                                    {item.icon}
                                    <span>
                                        {item.text}
                                    </span>
                                </li>
                            </Link>
                        ) : (
                            <li
                                style={{
                                    color: theme.primaryColor,
                                    borderBottom: "1px solid #ddd",
                                    padding: "0.5rem",
                                    marginBottom: "0.2rem",
                                    display: "flex",
                                    gap: "1rem"
                                }}

                            >
                                {item.icon}
                                <span>
                                    {item.text}
                                </span>
                            </li>
                        )}
                    </>
                ))}
            </ul>
        </div>
    );
};