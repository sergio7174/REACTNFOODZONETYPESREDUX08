import Navigation from './src/navigation/navigation';
import { SafeAreaProvider } from "react-native-safe-area-context";
// import the store
import {Provider} from 'react-redux';
import {Store} from './src/store/store';

export default function App() {
                         
    return (
   <>

      <SafeAreaProvider>
        <Provider store={Store}>
          <Navigation/>
        </Provider>  
      </SafeAreaProvider> 


           
</>
    );
}