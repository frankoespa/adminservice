import React from 'react';
import { ITrabajo } from '../src/classes/ITrabajo';

const AppContext = React.createContext<ITrabajo>({});

export default AppContext;
