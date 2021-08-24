import React, {useContext, useEffect, useState} from 'react';
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {useHistory} from "react-router-dom";
import {DesignData} from "../../types";
import Design from "./Design";
import {ProfileContainer} from "../../pages/Profile.styles";
import {ThemeContext} from "../../context/store";
import {useQuery} from "@apollo/client";
import {GET_DESIGNS} from "../../util/graphql";


const SavedDesigns = () => {
    const history = useHistory();

    const {data, loading} = useQuery(GET_DESIGNS)
    const [designs, setDesigns] = useState([])

    if (!useLocalStorage('profile')) {
        history.push('login')
    }

    useEffect(() => {
        if (data) {
            setDesigns(data.getDesigns)
        }
    }, [data])

    const {dark} = useContext(ThemeContext)

    return (
        <ProfileContainer dark={dark}>
            {loading ? <h3>Loading...</h3> :
                designs.map((design: DesignData) => (
                    <Design key={design.name} design={design}/>
                ))}
        </ProfileContainer>
    )
}

export default SavedDesigns;
