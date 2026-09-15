import { useState } from "react";

// ═══════════════════════════════════════════
//  DATA — 2027 (full year, Jan–Dec)
// ═══════════════════════════════════════════
const data2027 = [
  {
    id: "pdd", name: "Project Development Division", abbr: "PDD", color: "#6366f1",
    programs: [
      { name: "Development of Concept Notes & Project Proposals", activities: [
        { name: "Writeshop/Workshop on PCN", months: [3,4,6,9,11] },
        { name: "Coordination meeting on PCN development", months: [2,5,6,8,10] },
        { name: "Preparation of PCN", months: [4,9,11] },
        { name: "Capacity building on PCN preparation", months: [6,10] },
        { name: "Technical assistance on PCN", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "Project Performance Assessment", activities: [
        { name: "Division Project Implementation Review", months: [1,4,7,10] },
      ]},
      { name: "TWG, Task Force & Committee Membership", activities: [
        { name: "PMSMED Council meetings/activities", months: [5,9] },
      ]},
      { name: "NC/T/BLB Document Processing", activities: [
        { name: "Preparation of NC/T/BLB guidelines", months: [1,2] },
        { name: "Finalization of NC/T/BLB guidelines", months: [2,3,4] },
        { name: "Evaluate and review NC/T/BLB", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Obligation & Disbursement Vouchers", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Process NT/BLB vouchers", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Review payroll incentive of Foot Soldiers", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Orientation on N/C/T/BLB guidelines", months: [3,6] },
        { name: "Monitoring of NT/BLB", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Coordination with offices re: NT/BLB", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Coordination meeting with M/BLGU", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Preparation of reports", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Maintenance and updating of NT/BLB", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Technical assistance to M/BLGUs", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Addressing client concerns via email", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "Full Disclosure Policy Posting", activities: [
        { name: "Coordination/consolidation for posting", months: [3,6,9,12] },
        { name: "Maintenance and updating of portal", months: [3,6,9,12] },
      ]},
    ]
  },
  {
    id: "pmed", name: "Project Monitoring & Evaluation Division", abbr: "PMED", color: "#0ea5e9",
    programs: [
      { name: "Field Monitoring Visits to PPAs", activities: [
        { name: "Site visits to verify physical/financial progress", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "PPMC Secretariat Services", activities: [
        { name: "Field monitoring & meeting documentation", months: [3,6,9,12] },
      ]},
      { name: "Project Performance Assessment", activities: [
        { name: "Program Implementation Reviews", months: [2,5,8,11] },
        { name: "Technical assistance on AOP preparation", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
    ]
  },
  {
    id: "pfpd", name: "Policy Formulation & Planning Division", abbr: "PFPD", color: "#10b981",
    programs: [
      { name: "Development Goals, Objectives & Strategies", activities: [
        { name: "Formulation of development goals", months: [2,3,4] },
        { name: "Identify strategies, PPAs", months: [4,5,6] },
      ]},
      { name: "Development Framework", activities: [
        { name: "Framework for physical developments", months: [4] },
        { name: "Writeshops on maps & policy directions", months: [5,6] },
      ]},
      { name: "Climate Disaster Risk Assessment", activities: [
        { name: "CDRA workshops/activities", months: [5,6] },
      ]},
      { name: "Drafting of PDPFP", activities: [
        { name: "Drafting PDPFP chapters", months: [6] },
        { name: "Public consultation", months: [6,7] },
        { name: "Revision of draft PDPFP", months: [6,8] },
        { name: "Presentation to Governor/PDC", months: [6,9] },
      ]},
      { name: "PDPFP Review & Approval", activities: [
        { name: "Final editing of the plan", months: [7,10] },
        { name: "Quality assurance / proof reading", months: [8,11] },
        { name: "Submission to reviewing agencies", months: [12] },
      ]},
      { name: "PDPFP Printing & Distribution", activities: [
        { name: "Printing and distribution", months: [12] },
      ]},
      { name: "SHIELD Activities", activities: [
        { name: "Resilience Scorecard & Action Planning", months: [1,2,3] },
        { name: "Resilience Competency Assessment", months: [1,2,3] },
        { name: "Resilience Investment Proposal Writeshop", months: [1] },
        { name: "Investment Market Place Forum", months: [3] },
      ]},
    ]
  },
  {
    id: "ipbd", name: "Investment Planning & Budgeting Division", abbr: "IPBD", color: "#f59e0b",
    programs: [
      { name: "PDIP / AIP Preparation & Coordination", activities: [
        { name: "Call for submission of proposals", months: [1,2,3,4] },
        { name: "Sectoral committee meeting preparation", months: [4] },
        { name: "Conduct Sectoral committee meeting", months: [5] },
        { name: "Consolidation of endorsed PPAs", months: [5] },
        { name: "Prioritization of PPAs", months: [5] },
        { name: "PDC Full Council preparation", months: [5,11] },
        { name: "Conduct PDC Full Council Meeting", months: [5,11] },
        { name: "AIP/PDIP presentation for SP approval", months: [6,12] },
        { name: "PFC Meetings participated", months: [3,6,9,12] },
        { name: "C/MPDC meetings/convention", months: [2,5,9,12] },
      ]},
      { name: "Accredited CSOs", activities: [
        { name: "CSO meetings/workshops/CapDev/Summit", months: [6,10] },
      ]},
      { name: "Technical Review of AIPs", activities: [
        { name: "Technical review of AIPs/Supplementals", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Submit review results to PFC", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "AOP Review & Monitoring", activities: [
        { name: "Technical review of AOP", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Validation in PPA Monitoring System", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "DPCR Technical Review", activities: [
        { name: "Review of DPCR reports", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "Validation, Control & Other Functions", activities: [
        { name: "Validation of obligations vs AIP/AOP", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Facilitation of project proposals", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Walk-in client assistance", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        { name: "Special meetings (PPDC, PFC, etc.)", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
        ],
      },
      {
        name: "Formulation of the 2028 Peace and Order and Public Safety (POPS) Plan/Peace and Order Program", activities: [
          { name: 'Call for submission of proposals and project briefs from Peace and Order Program Implementors', months: [1,2,3,4,5,6,7,8,9,10,11,12] },
          { name: 'Drafting and packaging of the 2028 Peace and Order and Public Safety Plan', months: [1,2,3,7,8,9] },
          { name: 'Presentation of the POPS Plan to the Provincial Peace and Order Council for endorsement to PDC and its integration in the 2028 AIP', months: [1,2,3,7,8,9] },
          { name: 'Presentation of 2028 Peace and Order Plan to the PDC for their endorsement to the Sangguniang Panlalawigan', months: [1,2,3,7,8,9] },
          { name: 'Presentation of the 2028 Peace and Order Plan to SP for approval', months: [1,2,3,7,8,9] },
        ]
      },
      {
        name: 'Submission of the approved 2028 Peace and Order and Public Safety (POPS) Plan via POPS-PCMS', activities: [
          { name: 'Inputting of the 2028 POPS Plan into the POPS-PCMS', months: [4,5,6] },
          { name: 'Uploading of supporting documents', months: [4,5,6] },
        ]
      },
      {
        name: 'Provision of Secretariat to Provincial Peace and Order Council-TWG', activities: [
          { name: '', months: [1,2,3,4,5,6] },
        ]
      }
    ]
  },
  {
    id: "kmdr", name: "Knowledge Management & Dev Research Division", abbr: "KMDR", color: "#ec4899",
    programs: [
      { name: "CPSC Quarterly Business Meetings", activities: [
        { name: "1st Quarter meeting", months: [1,2,3] },
        { name: "2nd Quarter meeting", months: [4,5,6] },
        { name: "3rd Quarter meeting", months: [7,8,9] },
        { name: "4th Quarter meeting", months: [10,11,12] },
      ]},
      { name: "Statistical Capacity Development", activities: [
        { name: "1st Semester training/workshop", months: [4,5,6,7] },
        { name: "2nd Semester training/workshop", months: [10,11,12] },
      ]},
      { name: "National Statistics Month", activities: [
        { name: "NSM Celebration", months: [10] },
      ]},
      { name: "Barangay Profiling", activities: [
        { name: "Profiling to 20 LGUs", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
      { name: "PRDIC Activities", activities: [
        { name: "Meetings facilitated", months: [4,5,6,10,11,12] },
        { name: "Workshops/writeshops conducted", months: [4,5,6,10,11,12] },
      ]},
      { name: "PCCB Meetings", activities: [
        { name: "Coordinating Board meetings", months: [4,5,6,10,11,12] },
      ]},
      { name: "Computerized Systems Development", activities: [
        { name: "System development & deployment", months: [4,5,6,10,11,12] },
      ]},
      { name: "Press Releases / Planning Insights", activities: [
        { name: "Press releases published", months: [3,6,9,12] },
      ]},
      { name: "Deployment of KMDR Staff for the Operation of the Provincial I-Hub and SARAI Hub", activities: [
        { name: "", months: [1,2,3,4,5,6,7,8,9,10,11,12] },
      ]},
    ]
  },
];

// ═══════════════════════════════════════════
//  DATA — 2026 (remainder, Aug–Dec)
// ═══════════════════════════════════════════
const MONTHS_2026 = ["Aug","Sep","Oct","Nov","Dec"];
const data2026 = [
  {
    id: "pdd", name: "Project Development Division", abbr: "PDD", color: "#6366f1",
    programs: [
      { name: "Development of Concept Notes & Project Proposals", activities: [
        { name: "Writeshop/Workshop on PCN", months: [1,3,4] },
        { name: "Coordination meeting on PCN development", months: [2,3,4] },
        { name: "Preparation of PCN", months: [3,4,5] },
        { name: "Capacity building on PCN preparation", months: [3,4,5] },
        { name: "Technical assistance on PCN", months: [1,2,3,4,5] },
      ]},
      { name: "TWG, Task Force & Committee Membership", activities: [
        { name: "PMSMED Council meetings/activities", months: [3,4,5] },
      ]},
      { name: "NC/T/BLB Document Processing", activities: [
        { name: "Evaluate and review NC/T/BLB", months: [1,2,3,4,5] },
        { name: "Obligation & Disbursement Vouchers", months: [1,2,3,4,5] },
        { name: "Process NT/BLB vouchers", months: [1,2,3,4,5] },
        { name: "Review payroll incentive of Foot Soldiers", months: [1,2,3,4,5] },
        { name: "Monitoring of NT/BLB", months: [1,2,3,4,5] },
        { name: "Coordination with offices re: NT/BLB", months: [1,2,3,4,5] },
        { name: "Coordination meeting with M/BLGU", months: [1,2,3,4,5] },
        { name: "Preparation of reports", months: [1,2,3,4,5] },
        { name: "Maintenance and updating of NT/BLB", months: [1,2,3,4,5] },
        { name: "Technical assistance to M/BLGUs", months: [1,2,3,4,5] },
        { name: "Addressing client concerns via email", months: [1,2,3,4,5] },
      ]},
      { name: "Full Disclosure Policy Posting", activities: [
        { name: "Coordination/consolidation for posting", months: [1,2,3,4,5] },
        { name: "Maintenance and updating of portal", months: [1,2,3,4,5] },
      ]},
    ]
  },
  {
    id: "pmed", name: "Project Monitoring & Evaluation Division", abbr: "PMED", color: "#0ea5e9",
    programs: [
      { name: "PPMC Secretariat Services", activities: [
        { name: "Field Monitoring (scheduled by committee)", months: [1,2] },
        { name: "PPMC Technical & Administrative Documents", months: [1,2] },
      ]},
      { name: "Project Performance Assessment", activities: [
        { name: "Field Monitoring Activities", months: [1,2,3,4] },
        { name: "Program Implementation Review (PIR)", months: [4] },
      ]},
      { name: "Field Inspection", activities: [
        { name: "Conduct of Field Inspection activities", months: [1,2,3,4,5] },
      ]},
    ]
  },
  {
    id: "pfpd", name: "Policy Formulation & Planning Division", abbr: "PFPD", color: "#10b981",
    programs: [
      { name: "PDPFP", activities: [
        { name: "Data Gathering and Consolidation", months: [1,2,3] },
        { name: "Conduct of Situational Analysis Workshop", months: [4] },
        { name: "Preparation of Situational Analysis per Sector", months: [5] },
        { name: "Conduct of Visioning Activities", months: [5] },
      ]},
      { name: "SHIELD Activities", activities: [
        { name: "2nd Sambayanihan RTD for Policy Support", months: [2] },
        { name: "PCRD Mission 2", months: [2] },
        { name: "Meeting with PHIVOLCS, UN-HABITAT & PLGU", months: [3] },
        { name: "PCRD Mission 3", months: [2,3] },
        { name: "Project Ideation & Prioritization of PPAs", months: [2,3,4] },
        { name: "VCA data collection & cooperatives for BCP", months: [1,2] },
        { name: "Business Continuity Planning Workshop", months: [2,5] },
        { name: "VCA Validation Workshop", months: [2] },
      ]},
    ]
  },
  {
    id: "ipbd", name: "Investment Planning & Budgeting Division", abbr: "IPBD", color: "#f59e0b",
    programs: [
      { name: "PDIP / AIP Preparation & Coordination", activities: [
        { name: "PDPFP Workshop participation", months: [1] },
        { name: "PDC Full Council minutes transcription", months: [1] },
        { name: "4th Quarter C/MPDC Meeting preparation", months: [2] },
        { name: "Conduct 4th Quarter C/MPDC Meeting", months: [2] },
        { name: "Call for submission of proposals", months: [2,3,4] },
        { name: "Sectoral Committee Meeting preparation", months: [3] },
        { name: "Conduct Sectoral Committee Meeting", months: [3] },
        { name: "Finalize prioritization of PPAs", months: [3,4] },
        { name: "Drafting/packaging Investment Plans", months: [3,4] },
        { name: "Presentation of PDIP/SPDIP to PDC", months: [4] },
        { name: "PDC Full Council / ExCom preparation", months: [4] },
        { name: "Conduct PDC Full Council / ExCom Meeting", months: [5] },
      ]},
      { name: "Technical Reviews & Validation", activities: [
        { name: "DPCR Technical Review", months: [1,2,3,4,5] },
        { name: "AOP Technical Review", months: [1,2,3,4,5] },
        { name: "Validation of obligations vs AIP/AOP", months: [1,2,3,4,5] },
        { name: "AIP / SAIP Technical Review", months: [1,2,3,4,5] },
        { name: "Facilitation of project proposals", months: [1,2,3,4,5] },
        { name: "Walk-in client assistance", months: [1,2,3,4,5] },
        { name: "Special meetings attendance", months: [1,2,3,4,5] },
      ]},
    ]
  },
  {
    id: "kmdr", name: "Knowledge Management & Dev Research Division", abbr: "KMDR", color: "#ec4899",
    programs: [
      { name: "Barangay Profiling Data Gathering", activities: [
        { name: "3rd Quarter — Enrile, Cagayan", months: [1,2] },
        { name: "4th Quarter — Lasam, Cagayan", months: [5] },
      ]},
      { name: "MS Power BI Training", activities: [
        { name: "Preparation & coordination", months: [2,3] },
        { name: "Conduct MS PowerBI Training", months: [2,5] },
      ]},
      { name: "37th National Statistics Month", activities: [
        { name: "Statistical Capacity Building training", months: [3] },
        { name: "Tree Planting", months: [5] },
      ]},
      { name: "PRDIC Forum", activities: [
        { name: "Conduct of PRDIC Forum", months: [3] },
      ]},
      { name: "Computerized Systems Development", activities: [
        { name: "PPDO Personnel Information System", months: [2,3] },
        { name: "PPDO Website", months: [3] },
        { name: "Barangay Profiling System", months: [5] },
        { name: "Centralized Knowledge Management System", months: [5] },
      ]},
      { name: "Cagayan Provincial Statistics Committee", activities: [
        { name: "3rd Quarter Business Meeting", months: [2] },
        { name: "4th Quarter Business Meeting", months: [5] },
      ]},
      { name: "Deployment of KMDR Staff for the Operation of the Provincial I-Hub and SARAI Hub", activities: [
        { name: "", months: [10,11,12] },
      ]},
    ]
  },
];

// ═══════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════

const MONTHS_FULL = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function GanttBar({ months, color, totalMonths }) {
  const isContinuous = months.length === totalMonths;

  if (isContinuous) {
    return (
      <div style={{
        position: "absolute", left: 2, right: 2, top: "50%", transform: "translateY(-50%)",
        height: 14, borderRadius: 7,
        background: `repeating-linear-gradient(90deg, ${color}30 0px, ${color}30 6px, ${color}15 6px, ${color}15 12px)`,
        border: `1.5px solid ${color}35`,
      }}>
        <div style={{
          position: "absolute", left: 4, right: 4, top: "50%", transform: "translateY(-50%)",
          height: 2, borderRadius: 1,
          background: `${color}60`,
        }} />
      </div>
    );
  }

  const sorted = [...months].sort((a, b) => a - b);
  const spans = [];
  let start = sorted[0], end = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) { end = sorted[i]; }
    else { spans.push([start, end]); start = sorted[i]; end = sorted[i]; }
  }
  spans.push([start, end]);

  return spans.map(([s, e], i) => {
    const left = ((s - 1) / totalMonths) * 100;
    const width = ((e - s + 1) / totalMonths) * 100;
    return (
      <div key={i} style={{
        position: "absolute",
        left: `calc(${left}% + 2px)`,
        width: `calc(${width}% - 4px)`,
        top: "50%",
        transform: "translateY(-50%)",
        height: 14,
        borderRadius: 7,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        boxShadow: `0 1px 3px ${color}30`,
      }} />
    );
  });
}

function DivisionSection({ division, isExpanded, onToggle, monthLabels, totalMonths }) {
  const count = division.programs.reduce((s, p) => s + p.activities.length, 0);

  return (
    <div style={{ marginBottom: 4 }}>
      <button onClick={onToggle} style={{
        display: "flex", alignItems: "center", gap: 12,
        width: "100%", border: "none", cursor: "pointer",
        padding: "12px 20px",
        background: isExpanded ? `${division.color}08` : "transparent",
        borderRadius: 10,
        transition: "background 0.15s",
      }}>
        <div style={{
          width: 5, height: 32, borderRadius: 3,
          background: division.color, flexShrink: 0,
        }} />
        <div style={{ flex: 1, textAlign: "left" }}>
          <div style={{ fontSize: 15, fontWeight: 650, color: "#1e293b", letterSpacing: "-0.01em" }}>
            {division.name}
          </div>
          <div style={{ fontSize: 12.5, color: "#94a3b8", marginTop: 2 }}>
            {division.programs.length} programs · {count} activities
          </div>
        </div>
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none"
          style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}>
          <path d="M4 6L8 10L12 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isExpanded && (
        <div style={{ marginTop: 2 }}>
          {division.programs.map((program, pi) => (
            <div key={pi}>
              <div style={{
                display: "flex", alignItems: "center",
                padding: "7px 20px 7px 42px",
                background: `${division.color}06`,
                borderLeft: `3px solid ${division.color}30`,
                marginLeft: 20,
              }}>
                <div style={{
                  fontSize: 12.5, fontWeight: 650, color: division.color,
                  letterSpacing: "0.005em",
                }}>
                  {program.name}
                </div>
              </div>

              {program.activities.map((activity, ai) => (
                <div key={ai} style={{
                  display: "flex", alignItems: "center",
                  padding: "5px 20px 5px 42px",
                  borderRadius: 4,
                  minHeight: 32,
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{
                    width: "40%", minWidth: 220, maxWidth: 380, paddingRight: 16,
                    fontSize: 13, color: "#475569", lineHeight: 1.35,
                    display: "flex", alignItems: "center", gap: 8,
                  }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "#cbd5e1", flexShrink: 0,
                    }} />
                    <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
                      title={activity.name}>
                      {activity.name}
                    </span>
                  </div>

                  <div style={{ flex: 1, position: "relative", height: 28 }}>
                    {Array.from({ length: totalMonths }).map((_, mi) => (
                      <div key={mi} style={{
                        position: "absolute",
                        left: `${(mi / totalMonths) * 100}%`,
                        width: `${100 / totalMonths}%`,
                        height: "100%",
                        borderLeft: mi > 0 ? "1px solid #f1f5f9" : "none",
                      }} />
                    ))}
                    <GanttBar months={activity.months} color={division.color} totalMonths={totalMonths} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════
export default function PPDOGantt() {
  const [year, setYear] = useState("2027");
  const [expanded, setExpanded] = useState({ pdd: true, pmed: true, pfpd: true, ipbd: true, kmdr: true });
  const [filter, setFilter] = useState("all");

  const divisions = year === "2027" ? data2027 : data2026;
  const monthLabels = year === "2027" ? MONTHS_FULL : MONTHS_2026;
  const totalMonths = monthLabels.length;
  const filtered = filter === "all" ? divisions : divisions.filter(d => d.id === filter);

  const toggleAll = () => {
    const allOpen = Object.values(expanded).every(v => v);
    const next = {};
    divisions.forEach(d => next[d.id] = !allOpen);
    setExpanded(next);
  };

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      background: "#fff", minHeight: "100vh",
      padding: "28px 20px", maxWidth: 1280, margin: "0 auto",
    }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="4" width="6" height="3" rx="1.5" fill="#6366f1" opacity="0.7"/>
            <rect x="5" y="9" width="8" height="3" rx="1.5" fill="#0ea5e9" opacity="0.7"/>
            <rect x="3" y="14" width="10" height="3" rx="1.5" fill="#10b981" opacity="0.7"/>
          </svg>
          <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500, letterSpacing: "0.03em" }}>
            Provincial Planning & Development Office
          </span>
        </div>
        <h1 style={{
          fontSize: 26, fontWeight: 750, color: "#0f172a",
          letterSpacing: "-0.03em", margin: 0, lineHeight: 1.2,
        }}>
          Work Program Gantt Chart
        </h1>
        <p style={{ fontSize: 14, color: "#64748b", margin: "4px 0 0" }}>
          {year === "2027"
            ? "Full-year schedule — January to December 2027"
            : "Remainder of year — August to December 2026"}
        </p>
      </div>

      {/* ── Year Tabs ── */}
      <div style={{
        display: "flex", gap: 0, marginBottom: 16,
        background: "#f1f5f9", borderRadius: 12, padding: 4,
        width: "fit-content",
      }}>
        {["2026", "2027"].map(y => (
          <button key={y} onClick={() => { setYear(y); setFilter("all"); }} style={{
            padding: "10px 28px", borderRadius: 9, border: "none", cursor: "pointer",
            fontSize: 14, fontWeight: 600,
            fontFamily: "'Inter', system-ui, sans-serif",
            background: year === y ? "#fff" : "transparent",
            color: year === y ? "#0f172a" : "#94a3b8",
            boxShadow: year === y ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            transition: "all 0.15s",
          }}>
            {y === "2026" ? "2026 (Aug–Dec)" : "2027 (Full Year)"}
          </button>
        ))}
      </div>

      {/* ── Legend (top) ── */}
      <div style={{
        display: "flex", gap: 20, marginBottom: 14,
        padding: "10px 16px",
        background: "#f8fafc",
        borderRadius: 10,
        flexWrap: "wrap",
        alignItems: "center",
      }}>
        <span style={{ fontSize: 11.5, color: "#94a3b8", fontWeight: 600 }}>Legend:</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 12, borderRadius: 6,
            background: "linear-gradient(135deg, #6366f1, #6366f1cc)",
            boxShadow: "0 1px 2px #6366f130",
          }} />
          <span style={{ fontSize: 12.5, color: "#475569" }}>Scheduled activity</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 32, height: 12, borderRadius: 6,
            background: "repeating-linear-gradient(90deg, #6366f130 0px, #6366f130 5px, #6366f115 5px, #6366f115 10px)",
            border: "1.5px solid #6366f135",
            position: "relative",
          }}>
            <div style={{
              position: "absolute", left: 3, right: 3, top: "50%", transform: "translateY(-50%)",
              height: 2, borderRadius: 1, background: "#6366f160",
            }} />
          </div>
          <span style={{ fontSize: 12.5, color: "#475569" }}>Year-round / continuous</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginLeft: 8, flexWrap: "wrap" }}>
          {divisions.map(d => (
            <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <div style={{ width: 10, height: 10, borderRadius: 3, background: d.color }} />
              <span style={{ fontSize: 12, color: "#64748b", fontWeight: 500 }}>{d.abbr}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Filter pills ── */}
      <div style={{
        display: "flex", gap: 6, marginBottom: 12,
        flexWrap: "wrap", alignItems: "center",
      }}>
        <button onClick={() => setFilter("all")} style={{
          padding: "7px 16px", borderRadius: 22, border: "none", cursor: "pointer",
          fontSize: 13, fontWeight: 550,
          fontFamily: "'Inter', system-ui, sans-serif",
          background: filter === "all" ? "#0f172a" : "#f1f5f9",
          color: filter === "all" ? "#fff" : "#64748b",
          transition: "all 0.15s",
        }}>All Divisions</button>
        {divisions.map(d => (
          <button key={d.id} onClick={() => setFilter(d.id)} style={{
            padding: "7px 16px", borderRadius: 22, border: "none", cursor: "pointer",
            fontSize: 13, fontWeight: 550,
            fontFamily: "'Inter', system-ui, sans-serif",
            background: filter === d.id ? d.color : "#f1f5f9",
            color: filter === d.id ? "#fff" : "#64748b",
            transition: "all 0.15s",
          }}>{d.abbr}</button>
        ))}
        <div style={{ flex: 1 }} />
        <button onClick={toggleAll} style={{
          padding: "7px 16px", borderRadius: 22, border: "1px solid #e2e8f0",
          cursor: "pointer", fontSize: 12.5, fontWeight: 550, color: "#64748b",
          background: "transparent",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          {Object.values(expanded).every(v => v) ? "Collapse all" : "Expand all"}
        </button>
      </div>

      {/* ── Month header (sticky) ── */}
      <div style={{
        display: "flex", alignItems: "center",
        padding: "10px 20px",
        borderBottom: "2px solid #e2e8f0",
        position: "sticky", top: 0,
        background: "#fff", zIndex: 10,
      }}>
        <div style={{ width: "40%", minWidth: 220, maxWidth: 380 }}>
          <span style={{ fontSize: 12.5, color: "#94a3b8", fontWeight: 600 }}>Activity</span>
        </div>
        <div style={{ flex: 1, display: "flex" }}>
          {monthLabels.map((m, i) => (
            <div key={m} style={{
              flex: 1, textAlign: "center",
              fontSize: 13, fontWeight: 600, color: "#64748b",
              borderLeft: i > 0 ? "1px solid #f1f5f9" : "none",
              padding: "0 2px",
            }}>{m}</div>
          ))}
        </div>
      </div>

      {/* ── Quarter markers (2027 only) ── */}
      {year === "2027" && (
        <div style={{ display: "flex", alignItems: "center", padding: "0 20px" }}>
          <div style={{ width: "40%", minWidth: 220, maxWidth: 380 }} />
          <div style={{ flex: 1, display: "flex" }}>
            {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
              <div key={q} style={{
                flex: 3, textAlign: "center",
                fontSize: 10, fontWeight: 650, color: "#cbd5e1",
                letterSpacing: "0.08em", padding: "4px 0",
                borderLeft: i > 0 ? "1px dashed #e2e8f0" : "none",
              }}>{q}</div>
            ))}
          </div>
        </div>
      )}

      {/* ── Divisions ── */}
      <div style={{ marginTop: 4 }}>
        {filtered.map(division => (
          <DivisionSection
            key={division.id + year}
            division={division}
            isExpanded={expanded[division.id]}
            onToggle={() => setExpanded(prev => ({ ...prev, [division.id]: !prev[division.id] }))}
            monthLabels={monthLabels}
            totalMonths={totalMonths}
          />
        ))}
      </div>
    </div>
  );
}
