"use client"

import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {useRouter} from "next/navigation"
import Image from "next/image";
import VisibilityToggle from "@/components/VisibilityToggle";

interface Props {
    src: string
    title: string
    description: string
    dates: string[]
}

export default function Card({src, title, description, dates}: Props) {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="h-48">
                <Image className="object-contain" src={src} alt={title} width={200} height={200}></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title justify-center">{title}</h2>
                <CardActions title={title} dates={dates} description={description}></CardActions>
            </div>
        </div>
    )
}

interface CardActionProps {
    title: string
    description: string
    dates: string[]
}

function CardActions({title, dates, description}: CardActionProps) {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="card-actions flex-col items-center">
            <CardDates isVisible={toggle} onClick={setToggle} title={title} dates={dates}></CardDates>
            <CardDescription isVisible={!toggle} onClick={setToggle} description={description}></CardDescription>
        </div>
    )
}

interface CardDescriptionProps {
    isVisible: boolean
    description: string
    onClick: Dispatch<SetStateAction<boolean>>
}

function CardDescription({isVisible, description, onClick}: CardDescriptionProps) {
    return (
        <VisibilityToggle isVisible={isVisible} className="">
            <p className="text-center">{description}</p>
            <button
                className="bg-tulip-purple btn btn-primary m-5"
                onClick={() => onClick(true)}
            >
                View Dates
            </button>
        </VisibilityToggle>
    )
}

interface CardDatesProps {
    isVisible: boolean
    title: string
    dates: string[]
    onClick: Dispatch<SetStateAction<boolean>>
}

function CardDates({isVisible, title, dates, onClick} : CardDatesProps) {
    return (
        <VisibilityToggle isVisible={isVisible} className="flex flex-col">
            <p className="text-center mb-3">Select a date:</p>
            <CardDateButtons dates={dates} title={title}></CardDateButtons>
            <button className="bg-tulip-purple btn btn-primary m-5" onClick={() => onClick(false)}>Back</button>
        </VisibilityToggle>
    )
}

interface CardDateButtonProps {
    dates: string[]
    title: string
}

function CardDateButtons({dates, title} : CardDateButtonProps) {
    const router = useRouter();

    function btnClicked(date: string) {
        router.push(
            "/event?event=" +
            title.replaceAll(" ", "_") +
            "&date=" + date.replaceAll(" ", "_")
        )
    }

    return dates.map((date, idx) => {
        return (
            <button
                key={idx}
                className="bg-tulip-purple btn btn-primary m-1"
                onClick={() => btnClicked(date)}
            >
                {date}
            </button>
        )
    })
}