import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

interface IReduxProviderProps {
  children: ReactNode;
}
const ReduxProvider: FC<IReduxProviderProps> = ({ children }) => <Provider store={store}>{children}</Provider>;

export default ReduxProvider;
