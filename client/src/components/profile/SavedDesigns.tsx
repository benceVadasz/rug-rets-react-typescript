import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getDesigns} from "../../state/actions/designs";
import {useLocalStorage} from "../../customHooks/useLocalStorage";
import {useHistory} from "react-router-dom";
import {RootState} from "../../state/store";
import {DesignData} from "../../types";
import Design from "./Design";
import {ProfileContainer} from "../../pages/Profile.styles";
import {ThemeContext} from "../../context/store";


const SavedDesigns = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  if (!useLocalStorage('profile')) {
    history.push('login')
  }
  const userState = useLocalStorage('profile')
  const userId = userState?.result._id ? userState.result._id : userState?.result.googleId


  const designs = useSelector((state: RootState) => state.designs)
  const {dark} = useContext(ThemeContext)

  useEffect(() => {
    dispatch(getDesigns(userId))
  }, []);

  return (
      <ProfileContainer dark={dark}>
        {designs?.map((design: DesignData) => (
            <Design key={design.name} design={design}/>
        ))}
      </ProfileContainer>
  )
}

export default SavedDesigns;
