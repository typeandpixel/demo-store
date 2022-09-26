import clsx from 'clsx'
import { cssModule } from './TestClient.module.css'
import { vanillaExtract } from './TestClient.css'

export default function TestClient() {
    return (
        <h1 className={clsx(cssModule, vanillaExtract)}>TestClient</h1>
    )
}