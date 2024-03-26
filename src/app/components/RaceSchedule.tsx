'use client';

import NavBar from "@/app/components/NavBar";
import YearSelector from "@/app/components/YearSelector";
import { useState, useEffect } from "react";
import {Table, Spinner} from "flowbite-react";

interface Race {
    season: string;
    round: string;
    raceName: string;
    date: string;
    time?: string;
    Circuit: {
        circuitName: string;
        url: string;
    };
}

const RaceSchedule = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [races, setRaces] = useState<Race[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://ergast.com/api/f1/${selectedYear}.json`)
            .then((res) => res.json())
            .then((data) => {
                setRaces(data.MRData.RaceTable.Races);
                setLoading(false);
            });
    }, [selectedYear]);

    return (
        <>
            <NavBar />
            <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Spinner size="xxl" />
                </div>
            ) : (
                <div className="overflow-x-auto w-full">
                    <Table hoverable={true} striped={true}>
                        <Table.Head>
                            <Table.HeadCell>Season</Table.HeadCell>
                            <Table.HeadCell>Round</Table.HeadCell>
                            <Table.HeadCell>Race Name</Table.HeadCell>
                            <Table.HeadCell>Date</Table.HeadCell>
                            <Table.HeadCell>Time</Table.HeadCell>
                            <Table.HeadCell>Circuit</Table.HeadCell>
                            <Table.HeadCell>Information</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {races.map((race, index) => (
                                <Table.Row key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <Table.Cell>{race.season}</Table.Cell>
                                    <Table.Cell>{race.round}</Table.Cell>
                                    <Table.Cell>{race.raceName}</Table.Cell>
                                    <Table.Cell>{race.date}</Table.Cell>
                                    <Table.Cell>{race.time ? race.time : 'N/A'}</Table.Cell>
                                    <Table.Cell>{race.Circuit.circuitName}</Table.Cell>
                                    <Table.Cell>
                                        <a href={race.Circuit.url} target="_blank" rel="noopener noreferrer">
                                            Link
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            )}
        </>
    );
};

export default RaceSchedule;
