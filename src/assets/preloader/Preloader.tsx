import React from "react"
import preloader from './preloader.svg'

type PreloaderType = {
    isFetching: boolean
}

export const Preloader = (props: PreloaderType) => {
    return (
        <div>
            {props.isFetching ? <img src={preloader}  alt={'preloader'}/> : null}
    </div>
)
}