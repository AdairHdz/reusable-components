import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import {faker} from "@faker-js/faker";
import { filterValues } from '../../src/components/generics/table/table-filters';


const dataToSearchThrough = [
    {
        id: 1,
        content: {
            name: "Adair",
            lastName: "Hernández"
        }
    },
    {
        id: 2,
        content: {
            name: "Benjamín",
            lastName: "Ortiz"   
        }
    },
    {
        id: 3,
        content: {
            name: "Eduardo",
            lastName: "Hernández Solís"
        }
    },
    {
        id: 4,
        content: {
            name: "Irving",
            lastName: "Lozada Rodríguez"
        }
    },
];

describe("Table filter by text", () => {
    it("should find 'Irving' when introduced value is 'rv'", () => {
        const result = filterValues({
            data: dataToSearchThrough,
            key: "name",
            value: "vi"
        });
        expect(result).toStrictEqual([ { id: 4, content: { name: 'Irving', lastName: "Lozada Rodríguez" } } ])
    })

    it("should return the exact same data because value is an empty string", () => {
        const result = filterValues({
            data: dataToSearchThrough,
            key: "name",
            value: ""
        });
        expect(result).toStrictEqual(dataToSearchThrough)
    })

    it("should return no results when the search value has no matches", () => {
        const result = filterValues({
            data: dataToSearchThrough,
            key: "name",
            value: "123"
        });
        expect(result).toStrictEqual([])
    })

    it("should return no results if the search keyword is not present in any record", () => {
        const result = filterValues({
            data: dataToSearchThrough,
            key: "nonExistentSearchKey",
            value: "Adair"
        });
        expect(result).toStrictEqual([])
    })    
})