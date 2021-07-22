import React from 'react'
import {CardHeader} from "@material-ui/core";
import * as FS from "./ForumFeed.styles";
import {Skeleton} from "@material-ui/lab";

const MySkeleton = () => {
  return (
      <FS.Media>
          <CardHeader
              avatar={<Skeleton animation="wave" variant="circle" width={40} height={40}/>}
              title={<Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}}/>}
              subheader={<Skeleton animation="wave" height={10} width="40%"/>}
          />
          <Skeleton animation="wave" variant="rect" style={{height: 300}}/>
      </FS.Media>
  )
}

export default MySkeleton