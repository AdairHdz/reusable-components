import { render, waitFor, screen } from "@testing-library/react";
import {ThemeContextProvider} from "../../../src/context/ThemeContext";
import {DropdownButton} from "../../../src/components/generics/dropdown/DropdownButton";
import userEvent from '@testing-library/user-event';

describe("Dropdown button", () => {
    it("should only show list of items after being clicked", async () => {
        render(
            <ThemeContextProvider>
                <DropdownButton
                    items={[
                        {
                            text: "Item 1"
                        },
                        {
                            text: "Item 2"
                        },
                    ]}
                />
            </ThemeContextProvider>
        );
        
        await waitFor(async () => {
            const dropdownButton = screen.getByTestId("dropdownButton")            
            expect(screen.queryByText(/Item 1/)).toBeNull()
            await userEvent.click(dropdownButton)
            expect(screen.queryByText(/Item 1/)).toBeInTheDocument()
        });

    })
})