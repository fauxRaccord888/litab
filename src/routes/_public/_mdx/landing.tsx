import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useAccountNavigate } from '$feature/navigate/hooks'
import { useNavigate } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

import PentagramInsertEditor from './landing/-component/PentagramInsertEditor'
import PentagramCard from '$feature/Pentagram/components/PentagramCard'
import FeedItem from '$feature/feed/components/FeedItem'
import Button from "$lib/components/common/Button"
import Carousel from '$lib/components/common/Carousel'

import { differenceSample, feedSample, similaritySample, timelapseSample } from './landing/-data/sample'
import LandingKR from "./landing/-mdx/kr.mdx"
import LandingEN from "./landing/-mdx/en.mdx"
import "./landing/style.scss"

export const Route = createFileRoute('/_public/_mdx/landing')({
    component: Landing,
})

function Landing() {
    const { i18n, t } = useTranslation()
    const navigate = useNavigate()
    const accountNavigate = useAccountNavigate()

    const handleClickSubmit = () => {
        accountNavigate.accountMenuModal()
    }

    const page = Route.useSearch().page ?? 0

    const handleClickNext = () => {
        navigate({
            search: () => ({ 
                redirect: "/pentagram/create",
                page: page + 1 
            }),
        })
    }

    const handleClickPrevious = () => {
        navigate({
            search: () => ({ 
                redirect: "/pentagram/create",
                page: page - 1 
            }),
        })
    }

    const components = {
        Section(props: JSX.ElementAttributesProperty) {
            return (
                <section className="landing-mdx__section">
                    <div className="landing-mdx__section-inner-container" {...props} />
                </section>
            )
        },
        MainList(props: JSX.ElementAttributesProperty) {
            return <div {...props} className="landing-mdx__list--main"/>
        },
        SubList(props: JSX.ElementAttributesProperty) {
            return <div {...props} className="landing-mdx__list--sub"/>
        },
        Button(props: JSX.ElementAttributesProperty) {
            return (
                <Button {...props} primary onClick={handleClickSubmit} className="landing-mdx__button">
                    {t('navigate.authGate.button')}
                </Button>
            )
        },
        Carousel(props: { children?: ReactNode }) {
            return (
                <Carousel
                    {...props}
                    selected={page}
                    handleClickPrevious={handleClickPrevious}
                    handleClickNext={handleClickNext}
                />
            )
        },
        Similarity() {
            return (
                <PentagramCard
                    item={similaritySample}
                    renderConfig={{
                        metaInfo: false,
                        mainPentagon: true,
                        revision: false,
                        player: false
                    }}
                    eventHandler={{}}
                    options={{}}
                />
            )
        },
        Difference() {
            return (
                <PentagramCard
                    item={differenceSample}
                    renderConfig={{
                        metaInfo: false,
                        mainPentagon: true,
                        revision: false,
                        player: false
                    }}
                    eventHandler={{}}
                    options={{}}
                />
            )
        },
        Timelapse() {
            return (
                <PentagramCard
                    item={timelapseSample}
                    renderConfig={{
                        metaInfo: false,
                        mainPentagon: true,
                        revision: false,
                        player: true
                    }}
                    eventHandler={{}}
                    options={{}}
                />
            )
        },
        Feed() {
            return (
                <FeedItem 
                    item={feedSample}
                    renderConfig={{
                        message: true,
                        item: true
                    }}
                    options={{
                        showMessage: true
                    }}
                    eventHandler={{}}
                />
            )
        },
        Editor() {
            return <PentagramInsertEditor />
        }
    }

    if (i18n.language === 'ko') return <LandingKR components={components} />
    if (i18n.language === 'en') return <LandingEN components={components} />

}