"use client";

import { useState, ChangeEvent, useEffect, Key } from "react";
import Image from "next/image";
import Link from "next/link";
import Select from "../select/Select";

import Att from "./../../public/img/operators/finalAtt.jpg";
import Telcel from "./../../public/img/operators/TelcelforEdit.png";
import Movistar from "./../../public/img/operators/movistar-logo-marcas-1.webp";
import EditIcon from "./../../public/img/pngFiles/edit_pencil.png";
import Mexico from "./../../public/img/operators/Mexico_png.png";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

import PlansCard from "./PlansCard";

const choose = [
  { id: 1, name: "Choose a value" },
  { id: 2, name: "Top-UP" },
  { id: 3, name: "Recharge" },
];

const code = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const code2 = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

const code3 = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
];

// Define operator type
interface Operator {
  id: number;
  name: string;
  image: any; // Use StaticImageData type if you import your images properly
}

// Sample list of operators for the dropdown
const operators: Operator[] = [
  { id: 1, name: "AT&T", image: Att },
  { id: 2, name: "Telcel", image: Telcel },
  { id: 3, name: "Movistar", image: Movistar },
];

const Packages = () => {
  // State for edit mode, phone number and selected operator
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("+52 9999999999");
  const [selectedOperator, setSelectedOperator] = useState<Operator>({
    id: 1,
    name: "AT&T",
    image: Att,
  });
  const [filterType, setFilterType] = useState<number>(1);
  // Add state for mobile detection
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // ** State
  const plans = useSelector((store: RootState) => store.plans);

  // Add useEffect for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set your mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle editing
  const handleEditClick = (): void => {
    setIsEditing(true);
  };

  // Function to save changes
  const handleSaveClick = (): void => {
    setIsEditing(false);
  };

  // Function to handle phone number change
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhoneNumber(e.target.value);
  };

  // Function to handle operator change
  const handleOperatorChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const operatorId = parseInt(e.target.value);
    const newOperator = operators.find((op) => op.id === operatorId);
    if (newOperator) {
      setSelectedOperator(newOperator);
    }
  };

  const handleFitert = (type: 1 | 2) => setFilterType(type);

  const plansList =
    plans.plansDetails?.products.filter(
      ({ pt }: { pt: number }) => pt === filterType
    ) ?? [];

  return (
    <>
      <div
        className="valu__btn"
        style={{ margin: "10px", padding: "10px", textAlign: "center" }}
      >
        <div
          className="top-buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              flex: "1",
              minWidth: "120px",
              maxWidth: "200px",
              margin: "5px",
            }}
            onClick={() => handleFitert(1)}
            className="cmn__btn"
          >
            <span>Top-Up</span>
          </button>
          <button
            style={{
              flex: "1",
              minWidth: "120px",
              maxWidth: "200px",
              margin: "5px",
            }}
            className="cmn__btn"
            onClick={() => handleFitert(2)}
          >
            <span>Recharge</span>
          </button>
        </div>

        <div className="text-center mt-4">
          {isEditing ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <Image
                  style={{
                    width: isMobile ? "20px" : "30px",
                    height: isMobile ? "20px" : "30px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  src={Mexico}
                  alt="Country_Flag"
                />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  style={{
                    margin: "0",
                    fontSize: isMobile ? "0.875rem" : "1rem",
                    padding: isMobile ? "6px" : "8px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    width: "100%",
                  }}
                />
              </div>

              <select
                value={selectedOperator.id}
                onChange={handleOperatorChange}
                style={{
                  padding: isMobile ? "6px" : "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  width: "100%",
                  fontSize: isMobile ? "0.875rem" : "1rem",
                }}
              >
                {operators.map((operator) => (
                  <option key={operator.id} value={operator.id}>
                    {operator.name}
                  </option>
                ))}
              </select>

              <button
                onClick={handleSaveClick}
                style={{
                  padding: isMobile ? "6px 12px" : "8px 15px",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: isMobile ? "0.875rem" : "1rem",
                }}
                className="cmn__btn"
              >
                <span>Save</span>
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobile ? "8px" : "12px",
                width: "100%",
                flexWrap: isMobile ? "wrap" : "nowrap",
                padding: isMobile ? "0 10px" : "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  flex: isMobile ? "1 0 100%" : "0 1 auto",
                  justifyContent: isMobile ? "center" : "flex-start",
                  marginBottom: isMobile ? "8px" : "0",
                }}
              >
                <Image
                  style={{
                    width: isMobile ? "24px" : "40px",
                    height: isMobile ? "24px" : "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                  src={Mexico}
                  alt="Country_Flag"
                />

                <h4
                  id="numberField"
                  style={{
                    margin: "0",
                    fontSize: isMobile ? "1rem" : "1.9rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flexShrink: 0,
                    maxWidth: isMobile ? "150px" : "250px", // Changed from 35% to 250px
                    color: "#000", // Added explicit color to ensure visibility
                    display: "block", // Added to ensure display
                  }}
                >
                  {phoneNumber}
                </h4>
              </div>

              <Image
                style={{
                  borderRadius: "5px",
                  width: isMobile ? "80px" : "150px",
                  height: "auto",
                  objectFit: "contain",
                  flexShrink: 0,
                }}
                src={selectedOperator.image}
                alt="Operator Logo"
              />

              <Image
                src={EditIcon}
                onClick={handleEditClick}
                style={{
                  width: isMobile ? "20px" : "30px",
                  height: "auto",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
                alt="Edit_logo"
              />
            </div>
          )}
        </div>
      </div>

      <div className="row g-4">
        {plansList.map((plansDetail: any, index: Key | null | undefined) => (
          <div key={index} className="col-md-6 col-12">
            <PlansCard
              plansDetails={plansDetail}
              msisdn_info={plans.plansDetails.msisdn_info}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Packages;
