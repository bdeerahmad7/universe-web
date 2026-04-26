/* Guides.jsx — life guide with accordion sections */

import "./Guides.css";
import { useEffect, useState } from "react";
import { getData, setData, STORAGE_KEYS } from "../data/storage";

// guide sections data
const guidesData = [
  {
    id: "arrival",
    title: "Arrival and first days",
    intro: "Focus on the first essentials so your start in the UK feels calm, organised, and safe.",
    advice: [
      "Keep your passport, visa documents, university offer, and accommodation details together in one safe place.",
      "Sort your first 48 hours properly: food, water, chargers, toiletries, and where your nearest supermarket is.",
      "Learn the basics of your area early so you know your transport stop, pharmacy, and safest route home.",
      "If you are in London, understand whether contactless or Oyster makes more sense for your daily travel and always tap correctly so you do not overpay.",
    ],
    checklist: [
      "Documents secured",
      "Accommodation confirmed",
      "Essentials bought",
      "Local area understood",
    ],
    nextStep: "Once you feel settled, the smartest next move is sorting your phone, banking, and transport.",
  },
  {
    id: "money",
    title: "Money and banking",
    intro: "A simple money setup early on makes student life much easier and prevents unnecessary stress.",
    advice: [
      "Prepare your passport and proof of address before applying for a bank account.",
      "Use a simple weekly budget so your money stays under control without becoming complicated.",
      "Track transport spending properly because small daily journeys add up faster than people expect.",
      "Keep a small emergency amount aside if possible, even if your budget is tight.",
    ],
    checklist: [
      "Bank option researched",
      "Proof of address ready",
      "Budget started",
      "Emergency money planned",
    ],
    nextStep: "After your banking feels stable, move into rent, transport, and recurring monthly costs.",
  },
  {
    id: "housing",
    title: "Accommodation",
    intro: "Where you live affects your safety, budget, routine, and peace of mind more than most students expect.",
    advice: [
      "Prioritise safety, transport access, and daily practicality before luxury.",
      "Do not rush payments before understanding the contract and exactly who you are paying.",
      "Keep proof of deposits, rent payments, and agreements in one safe place.",
      "Check realistic travel time to campus, not just distance on a map.",
    ],
    checklist: [
      "Area checked",
      "Rent and bills understood",
      "Contract reviewed",
      "Payment proof saved",
    ],
    nextStep: "When your housing is secure, build your daily routine around it so your week feels easier.",
  },
  {
    id: "daily",
    title: "Daily life setup",
    intro: "The smoother your routine becomes, the more energy you keep for study, health, and real progress.",
    advice: [
      "Set up your SIM, internet, and transport before your schedule gets busy.",
      "Before choosing a mobile provider, check coverage in your area using the Ofcom mobile checker so you do not buy the wrong network for your postcode.",
      "If you are in London, learn how Tube, bus, and rail journeys charge so you can track your spending better.",
      "Keep your room, timetable, and important apps organised from the start.",
    ],
    checklist: [
      "SIM working",
      "Transport plan sorted",
      "Key apps installed",
      "Routine started",
    ],
    nextStep: "Once daily life feels stable, focus on your health, classes, and building a strong study rhythm.",
  },
  {
    id: "health",
    title: "Health and wellbeing",
    intro: "Good health systems are not just for emergencies. They help you stay stable and perform better overall.",
    advice: [
      "Know your nearest pharmacy and basic health options before you urgently need them.",
      "Register with a GP when you are settled enough to do it properly.",
      "Protect sleep, food, and stress levels because they affect everything else.",
      "Build a simple routine you can actually keep rather than chasing perfect habits.",
    ],
    checklist: [
      "Pharmacy known",
      "Basic medicines available",
      "GP registration planned",
      "Healthy routine started",
    ],
    nextStep: "When your basics are under control, the next step is balancing study, social life, and money wisely.",
  },
  {
    id: "work",
    title: "Work and legal basics",
    intro: "If you want part-time work, get the legal and admin side sorted early so you do not get blocked later.",
    advice: [
      "You will usually need your National Insurance number when starting a job, so check whether you already have one or whether you need to apply for one.",
      "If your employer asks for proof of your right to work, be ready to provide a valid share code if that applies to your immigration status.",
      "Keep your right-to-work documents, NI details, and job records together in one safe place.",
      "Understand your study-work balance first so a job supports your life instead of damaging your grades.",
    ],
    checklist: [
      "Right-to-work proof understood",
      "NI number checked",
      "Work documents organised",
      "Study-work balance planned",
    ],
    nextStep: "Once your legal basics are clear, focus on finding work that fits your timetable rather than chasing too many hours.",
  },
];

// total checklist items across all guides
const totalItems = guidesData.reduce((sum, g) => sum + g.checklist.length, 0);

export default function Guides() {
  const [openId, setOpenId] = useState("arrival");

  // load from centralised storage — per user if logged in
  const [checkedByGuide, setCheckedByGuide] = useState(() =>
    getData(STORAGE_KEYS.guideProgress, {})
  );

  // save to centralised storage on every change
  useEffect(() => {
    setData(STORAGE_KEYS.guideProgress, checkedByGuide);
  }, [checkedByGuide]);

  // toggle accordion section
  const toggleSection = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  // toggle checklist item
  const toggleCheck = (guideId, index) => {
    setCheckedByGuide((prev) => {
      const current = prev[guideId] || {};
      return { ...prev, [guideId]: { ...current, [index]: !current[index] } };
    });
  };

  // reset one section
  const resetSection = (guideId) => {
    setCheckedByGuide((prev) => ({ ...prev, [guideId]: {} }));
  };

  // overall progress
  const totalDone = guidesData.reduce((sum, g) => {
    return sum + Object.values(checkedByGuide[g.id] || {}).filter(Boolean).length;
  }, 0);

  const overallPercent = Math.round((totalDone / totalItems) * 100);

  return (
    <div className="guidesPage page">

      {/* page intro */}
      <section className="guidesIntro">
        <p className="guidesEyebrow">Life guide</p>
        <h1 className="guidesTitle">Practical help without the chaos.</h1>
        <p className="guidesSub">
          Click any section to expand it. Get real advice, a checklist, and a clear next step.
        </p>
      </section>

      {/* overall progress */}
      <div className="guidesProgressCard">
        <div className="guidesProgressTop">
          <span className="guidesProgressLabel">Your overall progress</span>
          <span className="guidesProgressCount">{totalDone} of {totalItems} done</span>
        </div>
        <div className="guidesProgressBar">
          <div
            className="guidesProgressFill"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
        {totalDone === totalItems && (
          <p className="guidesAllDone">✓ All sections completed — well done!</p>
        )}
      </div>

      {/* accordion sections */}
      <div className="guidesAccordion">
        {guidesData.map((guide) => {
          const done      = Object.values(checkedByGuide[guide.id] || {}).filter(Boolean).length;
          const total     = guide.checklist.length;
          const completed = done === total;
          const isOpen    = openId === guide.id;

          return (
            <div
              key={guide.id}
              className={`guideSection ${isOpen ? "open" : ""} ${completed ? "completed" : ""}`}
            >
              {/* section header */}
              <button
                className="guideSectionHeader"
                type="button"
                onClick={() => toggleSection(guide.id)}
              >
                <div className="guideSectionLeft">
                  <span className="guideSectionTitle">{guide.title}</span>
                  {completed && (
                    <span className="guideSectionDonePill">✓ Completed</span>
                  )}
                </div>
                <div className="guideSectionRight">
                  <span className="guideSectionCount">{done}/{total}</span>
                  <span className="guideSectionArrow">{isOpen ? "▲" : "▼"}</span>
                </div>
              </button>

              {/* section content */}
              {isOpen && (
                <div className="guideSectionBody">
                  <p className="guideSectionIntro">{guide.intro}</p>

                  <div className="guideSectionGrid">

                    {/* advice */}
                    <div className="guideAdviceCard">
                      <h3>What matters most</h3>
                      <div className="guideAdviceList">
                        {guide.advice.map((item) => (
                          <div className="guideAdviceItem" key={item}>
                            <span className="guideAdviceDot" />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                      <div className="guideNextCard">
                        <span className="guidesMiniPill dark">Recommended next step</span>
                        <p>{guide.nextStep}</p>
                      </div>
                    </div>

                    {/* checklist */}
                    <div className="guideChecklistCard">
                      <div className="guideChecklistTop">
                        <h3>Checklist</h3>
                        <button
                          type="button"
                          className="guideResetBtn"
                          onClick={() => resetSection(guide.id)}
                        >
                          Reset
                        </button>
                      </div>

                      <div className="guideChecklistList">
                        {guide.checklist.map((item, index) => {
                          const checked = !!checkedByGuide[guide.id]?.[index];
                          return (
                            <label
                              className={`guideCheckItem ${checked ? "done" : ""}`}
                              key={`${guide.id}-${index}`}
                            >
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleCheck(guide.id, index)}
                              />
                              <span>{item}</span>
                            </label>
                          );
                        })}
                      </div>

                      <div className="guideMiniNote">
                        Calm progress beats messy panic. One section at a time.
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}