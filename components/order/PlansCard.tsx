"use client";

import Image, { StaticImageData } from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import Select from "../select/Select";

import ata5g from "/public/img/payment/ata5g.png";

import Telcel from "@/public/img/operators/finaltelcel.jpg";
import Att from "@/public/img/operators/finalAtt.jpg";
import ThirdLogo from "@/public/img/operators/finalthird.jpg";
import oxxo from "@/public/img/operators/oxxo.jpeg";
import seven from "@/public/img/operators/seven-11.jpeg";
import Soriana from "@/public/img/operators/Soriana.webp";

import Link from "next/link";
import axiosInstance from "@/lib/axiosInstance";
import AmtModal from "./AmtModal";

type ProductKey = "TFEMXN_Q" | "MVNO" | "TFESV";

const prImage: Record<ProductKey, StaticImageData> = {
  TFEMXN_Q: Telcel,
  MVNO: Att,
  TFESV: ThirdLogo,
};

// types.ts
export interface Product {
  Skuid: string;
  pdn: string; // Product Name
  vn: string; // Vendor Name
  amt: number; // Amount
  crn: string; // Currency
  pt: 1 | 2; // Product Type: 1 = Fixed, 2 = Range
  min_range?: number;
  max_range?: number;
  gb?: number; // Data in GB
  dp?: number; // Days
  nos?: number; // Number of SMS
  ic?: number; // Incoming Call minutes
  oc?: number; // Outgoing Call minutes
}

export interface MsisdnInfo {
  msisdn: string;
  product: string;
}

export interface ProductInterfaceProps {
  msisdnInfo: MsisdnInfo;
  products: Product[];
}

const PlansCard = ({
  plansDetails,
  msisdn_info,
}: {
  plansDetails: Product;
  msisdn_info: MsisdnInfo;
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tmid, setTmid] = useState<string>("");
  const [localError, setLocalError] = useState<string>("");

  const { msisdn, product } = msisdn_info as {
    msisdn: string;
    product: ProductKey;
  };

  // ** toggle
  const toggle = (type: "open" | "close") => {
    if (type == "open") {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  // ** Login User
  async function logingUser() {
    try {
      debugger;
      const requestBody = {
        username: "gulam000",
        password: "B!N@ry1024",
        user_uid: "44505337",
        dist_api:
          "095b105359b0bceec998dd0f002707ae0e64f191f6550ef1f246d33b605039ce",
      };
      const { data } = await axiosInstance.post("/dislogin", {
        ...requestBody,
      });

      const { access } = data as { access: string };
      localStorage.setItem("access", access);
    } catch (error) {
      throw error;
      // router.push('/server-error/')
    }
  }

  // ** Generate Barcode
  async function generateBarcode() {
    try {
      if (plansDetails.Skuid == "0") {
        toggle("open");
        return;
      }
      if (!tmid) {
        setLocalError("Please select store");
        return;
      }
      const access = localStorage.getItem("access");
      if (!access) await logingUser();
      const res = await axiosInstance.post("/generate-barcode/", {
        msisdn,
        Skuid: plansDetails.Skuid,
        pdn: plansDetails.pdn,
        tmid: tmid == "mx" ? "sipe_mx" : tmid,
      });
    } catch (error) {
      console.log(error);
    }
  }

  // ** Make Payment
  async function makePayment() {
    try {
    } catch (error) {}
  }

  useEffect(() => {
    if (tmid && localError) {
      setLocalError("");
    }
  }, [tmid]);

  return (
    <Fragment>
      <div
        className="valu__items"
        style={{
          padding: isMobile ? "10px" : "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="valu__usd"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <Image
            src={prImage[product]}
            alt="img"
            width={isMobile ? 40 : 50}
            height={isMobile ? 40 : 50}
            style={{
              maxWidth: isMobile ? "40px" : "50px",
              height: "auto",
            }}
          />
          <span
            className="fz-18 fw-500"
            style={{
              fontSize: isMobile ? "14px" : "16px",
              fontWeight: "500",
            }}
          >
            {/* {index % 2 === 0
            ? `AT&T ${index * 5 + 5} USD PIN`
            : `AT&T Prepaid Refill ${index * 5 + 5} USD`} */}
            {plansDetails.pdn} Skuid:-{plansDetails.Skuid}
          </span>
        </div>
        <p
          style={{
            margin: "5px 0",
            fontSize: isMobile ? "12px" : "14px",
          }}
        >
          {/* {index % 2 === 0
          ? "Instant delivery to email"
          : "Instant delivery to phone"} */}
        </p>
        <span
          className="usd fz-16"
          style={{
            margin: "10px 0",
            fontWeight: "bold",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          USD {plansDetails.amt}
        </span>
        <label className="mt-2">
          Choose Store <span className="text-danger">*</span>
        </label>
        <div className="d-flex  gap-3 my-2">
          {[
            { src: oxxo, alt: "telcel_logo", value: "oxxo_mx" },
            { src: seven, alt: "att_logo", value: "sipe_mx" },
            { src: Soriana, alt: "moviestar", value: "mx" },
          ].map((operator, index) => (
            <Image
              key={index}
              style={{
                borderRadius: "10px",
                padding: "5px",
                width: "15%",
                height: "auto",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                border: tmid === operator.value ? "3px solid black" : "none",
                cursor: "pointer",
              }}
              src={operator.src}
              alt={operator.alt}
              onClick={() => setTmid(operator.value)}
            />
          ))}
        </div>
        {localError ? <p className="text-danger">{localError}</p> : null}
        <div
          className="valu__btn"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: isMobile ? "5px" : "10px",
            marginTop: "auto",
            flexWrap: "wrap",
          }}
        >
          {/* {index % 2 === 0 && (
          <div style={{ flex: "1", minWidth: isMobile ? "80px" : "100px" }}>
            <Select data={index === 0 ? code : index === 3 ? code2 : code3} />
          </div>
        )} */}
          <div className="d-flex w-100 gap-1">
            <button type="button" className="btn btn-primary w-50">
              Make Payment
            </button>

            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={generateBarcode}
            >
              Generate Barcode
            </button>
          </div>
        </div>
      </div>
      <AmtModal
        showModal={showModal}
        handleClose={() => toggle("close")}
        title="Seleccionar tienda"
        selectedPlan={plansDetails}
        sendToServer={generateBarcode}
      />
    </Fragment>
  );
};

export default PlansCard;
