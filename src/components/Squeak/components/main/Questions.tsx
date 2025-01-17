import React, { useRef } from 'react'
import root from 'react-shadow/styled-components'

import { Provider as OrgProvider } from '../../hooks/useOrg'
import QuestionsList from '../Questions'
import { Theme } from '../Theme'
import ErrorBoundary from '../ErrorBoundary'

type QuestionsProps = {
    apiHost: string
    organizationId: string
    limit?: number
    onSubmit: () => void
    onLoad: () => void
    topics?: boolean
    onSignUp: () => void
    topic?: any
    profileLink?: (profile: any) => string
}

export const Questions = ({
    apiHost,
    organizationId,
    limit,
    onSubmit,
    onLoad,
    topics = true,
    onSignUp,
    topic,
    profileLink,
}: QuestionsProps) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <ErrorBoundary>
            {/* @ts-ignore */}
            <root.div ref={containerRef}>
                <OrgProvider value={{ organizationId, apiHost, profileLink }}>
                    <Theme containerRef={containerRef} />
                    <div className="squeak">
                        <QuestionsList
                            onSignUp={onSignUp}
                            onLoad={onLoad}
                            topics={topics}
                            onSubmit={onSubmit}
                            limit={limit}
                            topic={topic}
                        />
                    </div>
                </OrgProvider>
            </root.div>
        </ErrorBoundary>
    )
}
