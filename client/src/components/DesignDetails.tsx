import React, {FunctionComponent as FC} from "react";
import {useParams} from "react-router";
import {ParamTypes} from "../types";

const DesignDetails: FC = () => {
    const {id} = useParams<ParamTypes>();

    return (
        <div>
            <div>
                <h1>{id}</h1>
            </div>
        </div>
    )
}

export default DesignDetails;