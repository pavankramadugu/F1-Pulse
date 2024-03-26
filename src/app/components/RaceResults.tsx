'use client'

import NavBar from "@/app/components/NavBar";
import { useState, useEffect } from "react";
import { Table, Spinner, Dropdown } from "flowbite-react";
import YearSelector from "@/app/components/YearSelector";

interface RaceResult {
    position: string;
    number: string;
    Driver: {
        givenName: string;
        familyName: string;
    };
    Constructor: {
        name: string;
    };
    laps: string;
    grid: string;
    Time?: {
        time: string;
    };
    status: string;
    points: string;
}

const RaceResults = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedRound, setSelectedRound] = useState<string>('');
    const [raceResults, setRaceResults] = useState<RaceResult[]>([]);
    const [rounds, setRounds] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://ergast.com/api/f1/${selectedYear}.json`)
            .then((res) => res.json())
            .then((data) => {
                const totalRounds = Number(data.MRData.total);
                setRounds(Array.from({ length: totalRounds }, (_, i) => i + 1));
            });
    }, [selectedYear]);

    useEffect(() => {
        if (selectedRound) {
            setLoading(true);
            fetch(`https://ergast.com/api/f1/${selectedYear}/${selectedRound}/results.json`)
                .then((res) => res.json())
                .then((data) => {
                    setRaceResults(data.MRData.RaceTable.Races[0].Results);
                    setLoading(false);
                });
        }
    }, [selectedYear, selectedRound]);

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center my-4">
                <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
                <Dropdown label="Select Round" inline>
                    {rounds.map((round) => (
                        <Dropdown.Item key={round} onClick={() => setSelectedRound(round.toString())}>
                            Round {round}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-96">
                    <Spinner size="xl" />
                </div>
            ) : (
                <div className="overflow-x-auto w-full">
                    <Table hoverable={true} striped={true}>
                        <Table.Head>
                            <Table.HeadCell>Pos</Table.HeadCell>
                            <Table.HeadCell>No</Table.HeadCell>
                            <Table.HeadCell>Driver</Table.HeadCell>
                            <Table.HeadCell>Constructor</Table.HeadCell>
                            <Table.HeadCell>Laps</Table.HeadCell>
                            <Table.HeadCell>Grid</Table.HeadCell>
                            <Table.HeadCell>Time</Table.HeadCell>
                            <Table.HeadCell>Status</Table.HeadCell>
                            <Table.HeadCell>Points</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {raceResults.map((result, index) => (
                                <Table.Row key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <Table.Cell>{result.position}</Table.Cell>
                                    <Table.Cell>{result.number}</Table.Cell>
                                    <Table.Cell>{result.Driver.givenName} {result.Driver.familyName}</Table.Cell>
                                    <Table.Cell>{result.Constructor.name}</Table.Cell>
                                    <Table.Cell>{result.laps}</Table.Cell>
                                    <Table.Cell>{result.grid}</Table.Cell>
                                    <Table.Cell>{result.Time ? result.Time.time : 'N/A'}</Table.Cell>
                                    <Table.Cell>{result.status}</Table.Cell>
                                    <Table.Cell>{result.points}</Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            )}
        </>
    );
};

export default RaceResults;
