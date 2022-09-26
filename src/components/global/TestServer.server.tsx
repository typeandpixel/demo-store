import clsx from 'clsx'
import { cssModule } from './TestServer.module.css'
import { vanillaExtract } from './TestServer.css'

export default function TestServer() {
    return (
        <h1 className={clsx(cssModule, vanillaExtract)}>TestServer</h1>
    )
}