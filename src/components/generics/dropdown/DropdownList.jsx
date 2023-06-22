import { Link } from 'react-router-dom';
import { useTheme } from '../../../hooks/use-theme';
import { DropdownItemTypes } from './DropdownProps';
import { styled } from 'styled-components';

/**
 * 
 * @param {import('./DropdownProps').DropdownListProps} props 
 * @returns 
 */
export const DropdownList = (props) => {
    const {
        theme
    } = useTheme();

    const StyledListItem = styled.li`
    color: ${theme.primaryColor};
    border-bottom: 1px solid #ddd;
    padding: 0.5rem;
    margin-bottom: 0.2rem;
    display: flex;
    gap: 1rem
    `;

    const StyledDropdownList = styled.div`
    position: absolute;
    top: 100%;
    min-width: 100%;
    padding: 1rem;
    box-shadow: 2px 2px 5px #777;
    `;

    return (
        <StyledDropdownList>
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
                                <StyledListItem>
                                    {item.icon}
                                    <span>
                                        {item.text}
                                    </span>
                                </StyledListItem>
                            </Link>
                        ) : (
                            <StyledListItem>
                                {item.icon}
                                <span>
                                    {item.text}
                                </span>
                            </StyledListItem>
                        )}
                    </>
                ))}
            </ul>
        </StyledDropdownList>
    );
};