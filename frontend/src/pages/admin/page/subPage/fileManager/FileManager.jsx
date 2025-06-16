import React from 'react'
import AllMedia from './AllMedia'
import AllFolder from './AllFolder'
import UICard from '../../../components/ui/UICard'
import FileList from './FileList'

function FileManager() {
  return (
<>
<UICard>
    
<AllMedia/>
<AllFolder/>
<FileList/>
</UICard>
</>
  )
}

export default FileManager
