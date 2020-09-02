//const { createContext } = require("react")

import React, {createContext, useContext, useReducer} from 'react';

export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer , children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);
// children => <App />

export const useDataLayerValue = () => useContext(DataLayerContext);