'use client'

import { Metadata } from 'next'
import { useEffect } from 'react'
import PageClient_Error from './_pages/error-page'

export const metadata:Metadata = {
    title: '500'
}

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <PageClient_Error/>
    )
}