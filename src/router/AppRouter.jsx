
import { Route, Routes} from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';


export const AppRouter = () => {

  const authStatus = 'not-authenticated';

  return (
   <Routes>
    {
              (authStatus === 'not-authenticated')
              ? <route path="/auth/*" element={ <LoginPage/>}  />
              :<route path="/*" element={ <CalendarPage/>}   />
    }
    
    <route path="/*" element={ <Navigate to = "/auth/login"/>}   />

   </Routes>
  )
}

