// Form.tsx

import { ReactNode } from 'react'

export default ({
    children,
    className
}: {
    children: ReactNode
    className?: string
}) => {
    // set class name
    const baseClassName = [].join(' ') + ' ' + className

    // ------------------------------------------------------------------------

    return (
        <>
            <div className={baseClassName}>{children}</div>
        </>
    )

    //
}

// EOF
