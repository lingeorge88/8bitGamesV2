import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from "../categories.selector";

const mockState = {
    categories: {
        isLoading: false,
        categories: [
            {
                title: 'accessories',
                imageUrl: 'test',
                items: [
                    { id: 1, name: 'Product 1'},
                    { id: 2, name: 'Product 2'}
                ]
            },
            {
                title: 'apparel',
                imageUrl: 'test2',
                items: [
                    { id: 3, name: 'Product 3'},
                    { id: 4, name: 'Product 4'}
                ]
            },
        ]
    }
};

describe('Category selectors', ()=> {
    test('selectCategories should return the categoriesData', ()=> {
        const categoriesSlice = selectCategories(mockState);
        expect(categoriesSlice).toEqual(mockState.categories.categories);
    });

    test('selectCategoriesIsLoading should return the isLoading state', ()=> {
        const isLoading = selectCategoriesIsLoading(mockState);
        expect(isLoading).toEqual(false);
    });

    test('selectCategoriesMap should convert the items array into the appropriate map', () => {
        const expectedCategoriesMap = {
            accessories: [
                { id: 1, name: 'Product 1'},
                { id: 2, name: 'Product 2'}
            ],
            apparel: [
                { id: 3, name: 'Product 3'},
                { id: 4, name: 'Product 4'}
            ]
        }
        const categoriesMap = selectCategoriesMap(mockState);
        expect(categoriesMap).toEqual(expectedCategoriesMap);
    })
})