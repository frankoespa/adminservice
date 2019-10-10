import React from 'react';

interface IAppContext {
	title: string;
}

const AppContext = React.createContext<IAppContext>(null);

export default AppContext;
