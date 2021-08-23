import React, {useContext, useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {getDesigns} from "../../state/actions/designs";
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
  const dispatch = useDispatch();

  const {data, loading} = useQuery(GET_DESIGNS)
  const [designs, setDesigns] = useState([])

  if (!useLocalStorage('profile')) {
    history.push('login')
  }
  const userState = useLocalStorage('profile')
  const userId = userState?.user._id ? userState.user._id : userState?.user.googleId


  useEffect(() => {
    setDesigns(data.getDesigns)
  }, [data])

  const {dark} = useContext(ThemeContext)

  useEffect(() => {
    dispatch(getDesigns(userId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <ProfileContainer dark={dark}>
        {loading? <h3>Loading...</h3> :
            designs.map((design: DesignData) => (
            <Design key={design.name} design={design}/>
        ))}
      </ProfileContainer>
  )
}

export default SavedDesigns;
