"use client";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import Modal from "./Model";
import Attendance from "../attendance/page";


interface Appointment {
  id: string;
  time: string;
  motherName: string;
  location: string;
  status: string;
}

interface MedicalRecord {
  id: string;
  date: string;
  motherName: string;
  weight: string;
  bloodPressure: string;
  location: string;
  nextAppointment: string;
}

interface ColumnMeta {
  field: string;
  header: string;
}

const fetchAppointments = async (): Promise<Appointment[]> => {
  return [
    {
      id: "1",
      time: "08:30 AM",
      motherName: "Dorcas Mushi",
      location: "Mbezi Mwisho",
      status: "Approved",
    },
    {
      id: "2",
      time: "09:00 AM",
      motherName: "Joyce Samuel",
      location: "Mbezi Mwisho",
      status: "Approved",
    },
    {
      id: "3",
      time: "09:30 AM",
      motherName: "Fatma Ali",
      location: "Mbezi Mwisho",
      status: "Pending",
    },
    {
      id: "4",
      time: "10:00 AM",
      motherName: "Halima Juma",
      location: "Mbezi Mwisho",
      status: "Approved",
    },
    {
      id: "5",
      time: "10:30 AM",
      motherName: "Amina Rashid",
      location: "Mbezi Mwisho",
      status: "Denied",
    },
    {
      id: "6",
      time: "11:00 AM",
      motherName: "Salma Khamis",
      location: "Mbezi Mwisho",
      status: "Approved",
    },
    {
      id: "7",
      time: "11:30 AM",
      motherName: "Khadija Mohammed",
      location: "Mbezi Mwisho",
      status: "Pending",
    },
  ];
};

export default function AppointmentsTable() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchAppointments().then((data) => setAppointments(data));
  }, []);

  const onRowSelect = (rowData: Appointment) => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <DataTable
        value={appointments}
        responsiveLayout="scroll"
        onClick={onRowSelect}
      >
        <Column field="time" header="Time"></Column>
        <Column field="motherName" header="Mother’s Name"></Column>
        <Column field="location" header="Location"></Column>
        <Column field="status" header="Status"></Column>
      </DataTable>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Attendance />
      </Modal>
    </div>
  );
}


export const MedicalRecordsTable = () => {
  const [records, setRecords] = useState<MedicalRecord[]>([]);

  const columns: ColumnMeta[] = [
    { field: "date", header: "Date" },
    { field: "motherName", header: "Mother’s Name" },
    { field: "weight", header: "Weight" },
    { field: "bloodPressure", header: "B. Pressure" },
    { field: "location", header: "Location" },
    { field: "nextAppointment", header: "Next Appointment" },
  ];

  // Simulating fetching data
  useEffect(() => {
    const fetchData = async () => {
      const data: MedicalRecord[] = [
        {
          id: "1",
          date: "12th June 2024",
          motherName: "Dorcas Mushi",
          weight: "76 kg",
          bloodPressure: "90 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "12th June 2024",
        },
        {
          id: "2",
          date: "12th June 2024",
          motherName: "Joyce Samuel",
          weight: "68 kg",
          bloodPressure: "85 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "19th June 2024",
        },
        {
          id: "3",
          date: "12th June 2024",
          motherName: "Fatma Ali",
          weight: "70 kg",
          bloodPressure: "88 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "20th June 2024",
        },
        {
          id: "4",
          date: "12th June 2024",
          motherName: "Halima Juma",
          weight: "72 kg",
          bloodPressure: "92 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "15th June 2024",
        },
        {
          id: "5",
          date: "12th June 2024",
          motherName: "Amina Rashid",
          weight: "75 kg",
          bloodPressure: "89 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "22nd June 2024",
        },
        {
          id: "6",
          date: "12th June 2024",
          motherName: "Salma Khamis",
          weight: "73 kg",
          bloodPressure: "87 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "16th June 2024",
        },
        {
          id: "7",
          date: "12th June 2024",
          motherName: "Khadija Mohammed",
          weight: "74 kg",
          bloodPressure: "86 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "18th June 2024",
        },
        {
          id: "8",
          date: "12th June 2024",
          motherName: "Rehema Saidi",
          weight: "77 kg",
          bloodPressure: "91 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "21st June 2024",
        },
        {
          id: "9",
          date: "12th June 2024",
          motherName: "Mariam Hassan",
          weight: "79 kg",
          bloodPressure: "95 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "17th June 2024",
        },
        {
          id: "10",
          date: "12th June 2024",
          motherName: "Zainabu Bakari",
          weight: "69 kg",
          bloodPressure: "84 mmHg",
          location: "Mbezi Mwisho",
          nextAppointment: "23rd June 2024",
        },
      ];
      setRecords(data);
    };

    fetchData();
  }, []);

  return (
    <main className="w-full">
      <div className="card">
        <DataTable value={records} responsiveLayout="scroll">
          {columns.map((col, i) => (
            <Column key={i} field={col.field} header={col.header} />
          ))}
        </DataTable>
      </div>
    </main>
  );
};
