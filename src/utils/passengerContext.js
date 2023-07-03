import { createContext, useState } from 'react';

const PassengerContext = createContext();

export const PassengerProvider = ({ children }) => {
    const [passengerTypes, setPassengerTypes] = useState();

    return (
        <PassengerContext.Provider value={{ passengerTypes, setPassengerTypes }}>{children}</PassengerContext.Provider>
    );
};

export default PassengerContext;
