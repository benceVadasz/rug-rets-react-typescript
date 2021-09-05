import React, {Dispatch, SetStateAction} from 'react'
import * as SS from './Searchbar.styles'

interface ISearchProps {
    search: (phrase : string) => void
}

const Searchbar = ({search}: ISearchProps) => {

    const bs = (e: React.ChangeEvent<HTMLInputElement>) => {
        search(e.target.value)
    }

    return (
        <SS.Container>
            <SS.SearchInput type="text" placeholder="Search..." onChange={bs} />
        </SS.Container>
    )
}

export default Searchbar;