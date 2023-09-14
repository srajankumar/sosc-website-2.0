"use client"
import React, { useCallback, useEffect, useState } from 'react'

interface ScrollValue {
    scrollY: number
}
type ScrollObserverProps = {
    children: React.ReactNode;
};

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 })

const ScrollObserver: React.FC<ScrollObserverProps> = (props: any) => {
    const children = props ? props.children : null;
    const [scrollY, setScrollY] = useState<number>(0)
    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])
    return (
        <ScrollContext.Provider value={{ scrollY }}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver