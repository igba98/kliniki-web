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

const sendSMS = async (phoneNumber: string, message: string) => {
  try {
    const response = await fetch(
      "https://fmers-api.onrender.com/api/communication/payload-sms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, message }),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to send SMS");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function AppointmentsTable() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAppointments().then((data) => setAppointments(data));
  }, []);

  const onStatusButtonClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setPhoneNumber(appointment.phoneNumber); // Assuming the phone number is part of the appointment
    setIsModalOpen(true);
  };

  const statusBodyTemplate = (rowData: Appointment) => {
    return (
      <button
        onClick={() => onStatusButtonClick(rowData)}
        className="p-button p-component"
      >
        {rowData.status}
      </button>
    );
  };

  const handleSend = async () => {
    try {
      await sendSMS(phoneNumber, message);
      alert("Message sent successfully");
      setIsModalOpen(false);
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <div>
      <DataTable value={appointments} responsiveLayout="scroll">
        <Column field="time" header="Time"></Column>
        <Column field="motherName" header="Mother’s Name"></Column>
        <Column field="location" header="Location"></Column>
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
        ></Column>
      </DataTable>
      {isModalOpen && selectedAppointment && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div
            className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8"
            role="alert"
          >
            <div className="flex items-center gap-4">
              <span className="shrink-0 rounded-full bg-blue-400 p-2 text-white">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <p className="font-medium sm:text-lg">New message!</p>
            </div>
            <p className="mt-4 text-gray-500">
              <label>
                Number of Users:
                <input
                  type="number"
                  className="input-field"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </label>
            </p>
            <p className="mt-4 text-gray-500">
              <label>
                Message:
                <textarea
                  className="input-field"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </label>
            </p>
            <div className="mt-6 sm:flex sm:gap-4">
              <button
                className="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                onClick={handleSend}
              >
                Send
              </button>
              <button
                className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
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
