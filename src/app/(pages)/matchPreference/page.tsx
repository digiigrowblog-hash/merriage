"use client";

import { ChevronLeft, ThumbsDown, Zap, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { GenderPreference } from "@/components/smallComponent/GenderPreferences";
import { useState } from "react";
import { Smoking } from "@/components/smallComponent/Smoking";
import { Drug } from "@/components/smallComponent/Drug";
import { Drinking } from "@/components/smallComponent/Drinking";
import { FamilyPlan } from "@/components/smallComponent/FamilyPlan";
import { Education } from "@/components/smallComponent/Education";
import { HeightPopup } from "@/components/smallComponent/Height";
import { SalaryPopup } from "@/components/smallComponent/Salary";
import { AgeRangePopup } from "@/components/smallComponent/Age";
import { ReligionPopup } from "@/components/smallComponent/Religion";
import { DistancePopup } from "@/components/smallComponent/MaxDistance";
import { LocationPopup } from "@/components/smallComponent/MyLocation";

export default function MatchPreference() {
  const [lock, setLock] = useState(true);

  // state for free preferences
  const [interestedIn, setInterestedIn] = useState("Women");
  const [showInterestedPopup, setShowInterestedPopup] = useState(false);

  const [religion, setReligion] = useState<string | null>("Hindu");
  const [showReligionPopup, setShowReligionPopup] = useState(false);
  const religionLabel = religion ?? "Any";

  const [minAge, setMinAge] = useState<number | null>(21);
  const [maxAge, setMaxAge] = useState<number | null>(28);
  const [showAgePopup, setShowAgePopup] = useState(false);

  const [distanceKm, setDistanceKm] = useState(24);
  const [showDistancePopup, setShowDistancePopup] = useState(false);

  const [locationLabel, setLocationLabel] = useState("Vashi");
  const [locationPos, setLocationPos] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  // state for premium preferences
  const [smoking, setSmoking] = useState("Never");
  const [showSmokingPopup, setShowSmokingPopup] = useState(false);

  const [drug, setDrug] = useState("Never");
  const [showDrugPopup, setShowDrugPopup] = useState(false);

  const [drinking, setDrinking] = useState("Never");
  const [showDrinkingPopup, setShowDrinkingPopup] = useState(false);

  const [familyPlan, setFamilyPlan] = useState("Want Children");
  const [showFamilyPlanPopup, setShowFamilyPlanPopup] = useState(false);

  const [education, setEducation] = useState("Undergraduate");
  const [showEducationPopup, setShowEducationPopup] = useState(false);

  const [heightCm, setHeightCm] = useState<number | null>(null);
  const [showHeightPopup, setShowHeightPopup] = useState(false);

  const [minSalary, setMinSalary] = useState<number | null>(15000);
  const [maxSalary, setMaxSalary] = useState<number | null>(1000000);
  const [showSalaryPopup, setShowSalaryPopup] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  // safely read `from`, default to "/home"
const previousPage = searchParams.get("from") || "/home";

const handlePrevPage = () => {
    router.push(previousPage);
}

  const handlePremiumMembership = () => {
    // when going to monthlySubscription, forward the same `from`
    router.push(
      `/monthlySubscription?from=${encodeURIComponent(previousPage)}`
    );
  };

  const formatRange = () => {
    const fmt = (v: number | null) =>
      v == null
        ? "Any"
        : v >= 1000000
        ? "10,00,000+"
        : v.toLocaleString("en-IN");
    return `${fmt(minSalary)} - ${fmt(maxSalary)}`;
  };

  const ageLabel = () => {
    const fmt = (v: number | null) => (v == null ? "Any" : v);
    return `${fmt(minAge)} - ${fmt(maxAge)}`;
  };

  return (
    <div className="min-h-screen max-w-full">

      {/* back button with title */}
      <div
        className="left-0 right-0 top-0 z-50 w-full bg-white p-2 
          py-3 px-3 border-b-1 border-red-50"
      >
        <div className="flex space-x-2">
          <button onClick={handlePrevPage} className="-mt-2">
            <ChevronLeft className="size-4 stroke-3 mt-2 cursor-pointer " />
          </button>
          <h1 className=" sm:text-xl text-lg font-bold text-black">
            Matching Preferences
          </h1>
        </div>
      </div>

      {/* free preferences */}
      <div className="flex-col px-2">
        <h1 className="rhodium-libre-regular mt-3 text-xl font-semibold text-gray-300">
          Member Preferences
        </h1>
        {/* preference */}
        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">I'm interested in</h2>
          <button
            type="button"
            onClick={() => setShowInterestedPopup(true)}
            className="w-full text-left"
          >
            <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
              <span className="text-red-300 text-sm ">{interestedIn}</span>
            </div>
          </button>
          <GenderPreference
            open={showInterestedPopup}
            value={interestedIn}
            onClose={() => setShowInterestedPopup(false)}
            onChange={(v) => setInterestedIn(v)}
          />
        </div>

        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">My neighbourhood</h2>
          <div>
            <button
              type="button"
              onClick={() => setShowLocationPopup(true)}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{locationLabel}</span>
              </div>
            </button>
          </div>

          <LocationPopup
            open={showLocationPopup}
            value={locationPos}
            label={locationLabel}
            onClose={() => setShowLocationPopup(false)}
            onChange={(pos, label) => {
              setLocationPos(pos);
              setLocationLabel(label);
            }}
          />
        </div>

        {/* Distance */}
        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Max Distance</h2>
          <button
            type="button"
            onClick={() => setShowDistancePopup(true)}
            className="w-full text-left"
          >
            <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
              <span className="text-red-300 text-sm ">{distanceKm} km</span>
            </div>
          </button>

          <DistancePopup
            open={showDistancePopup}
            value={distanceKm}
            onClose={() => setShowDistancePopup(false)}
            onChange={setDistanceKm}
          />
        </div>

        {/* age */}
        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Age range</h2>
          <button
            type="button"
            onClick={() => setShowAgePopup(true)}
            className="w-full text-left"
          >
            <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
              <span className="text-red-300 text-sm ">{ageLabel()}</span>
            </div>
          </button>

          <AgeRangePopup
            open={showAgePopup}
            minAge={minAge}
            maxAge={maxAge}
            onClose={() => setShowAgePopup(false)}
            onChange={(min, max) => {
              setMinAge(min);
              setMaxAge(max);
            }}
          />
        </div>

        {/* religion */}
        <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
          <h2 className="font-bold">Religion</h2>
          <button
            type="button"
            onClick={() => setShowReligionPopup(true)}
            className="w-full text-left"
          >
            <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
              <span className="text-red-300 text-sm ">{religionLabel}</span>
            </div>
          </button>

          <ReligionPopup
            open={showReligionPopup}
            value={religion}
            onClose={() => setShowReligionPopup(false)}
            onChange={(val) => setReligion(val)}
          />
        </div>
      </div>

      {/* paid preference */}

      <div className="flex-col px-2">
        <h1 className="rhodium-libre-regular mt-3 text-xl font-semibold text-gray-300">
          Subscriber Preferences
        </h1>

        {/* update */}
        <div
          className="px-2 py-3 rounded-lg  gap-3 
          bg-gradient-to-br from-rose-200 via-pink-200 to-rose-200
          flex justify-between items-center mb-1"
        >
          <Link
            href={"/monthlySubscription?from=matchPreference"}
            className="relative shadow-md bg-white px-6 py-1  rounded-full"
          >
            <Zap className="size-5 -top-1 -right-1 text-pink-900 absolute" />
            <span className="text-pink-700 text-lg font-semibold">Update</span>
          </Link>

          <div className="px-1">
            <span className="text-sm font-medium">
              Subscribe for more filter option & get more chances
            </span>
          </div>
        </div>

        {/* HEIGHT */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Height</h2>
            <button
              type="button"
              onClick={() => setShowHeightPopup(true)}
              className="w-full text-left"
            >
              <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
                <div className="flex flex-col">
                  <span className="text-red-300 text-sm">
                    {heightCm ? `${heightCm} cm` : "open to all"}
                  </span>
                </div>
              </div>
            </button>

            <HeightPopup
              open={showHeightPopup}
              value={heightCm}
              onClose={() => setShowHeightPopup(false)}
              onChange={setHeightCm}
              className="bg-black/40"
            />
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        {/* family plan */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
      `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
    );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Family plans</h2>
            <button
              type="button"
              onClick={() => {
                setShowFamilyPlanPopup(true);
              }}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{familyPlan}</span>
              </div>
            </button>
            <FamilyPlan
              open={showFamilyPlanPopup}
              value={familyPlan}
              onClose={() => setShowFamilyPlanPopup(false)}
              onChange={(v) => setFamilyPlan(v)}
            />
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        {/* Drug */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Drug</h2>
            <button
              type="button"
              onClick={() => {
                setShowDrugPopup(true);
              }}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{drug}</span>
              </div>
            </button>
            <Drug
              open={showDrugPopup}
              value={drug}
              onClose={() => setShowDrugPopup(false)}
              onChange={(v) => setDrug(v)}
            />
          </div>
          <LockKeyhole className="size-5 text-gray-400" />
        </div>

        {/* smoking */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Smoking</h2>
            <button
              type="button"
              onClick={() => setShowSmokingPopup(true)}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{smoking}</span>
              </div>
            </button>

            <Smoking
              open={showSmokingPopup}
              value={smoking}
              onClose={() => setShowSmokingPopup(false)}
              onChange={(v) => setSmoking(v)}
            />
          </div>
         { lock && <LockKeyhole className="size-5 text-gray-400" />}
        </div>

        {/* drinking */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Drinking</h2>
            <button
              type="button"
              onClick={() => setShowDrinkingPopup(true)}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{drinking}</span>
              </div>
            </button>

            <Drinking
              open={showDrinkingPopup}
              value={drinking}
              onClose={() => setShowDrinkingPopup(false)}
              onChange={(v) => setDrinking(v)}
            />
          </div>
          { lock && <LockKeyhole className="size-5 text-gray-400" />}
        </div>

        {/* education */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Education</h2>
            <button
              type="button"
              onClick={() => {
                setShowEducationPopup(true);
              }}
              className="w-full text-left"
            >
              <div className="flex-col border-b-1 border-red-50 p-2 mb-1">
                <span className="text-red-300 text-sm ">{education}</span>
              </div>
            </button>
            <Education
              open={showEducationPopup}
              value={education}
              onClose={() => setShowEducationPopup(false)}
              onChange={(v) => setEducation(v)}
            />
          </div>
         { lock && <LockKeyhole className="size-5 text-gray-400" />}
        </div>

        {/* salary */}
        <div
          onClick={() => {
            if (lock) {
              router.push(
                `/monthlySubscription?from=${encodeURIComponent(previousPage)}&membership=matchPreference`
              );
            } else {
              setShowHeightPopup(true);
            }
          }}
          className="flex justify-between items-center border-b border-red-50 p-2 mb-1"
        >
          <div className="flex flex-col">
            <h2 className="font-bold">Salary</h2>
            <button
              type="button"
              onClick={() => setShowSalaryPopup(true)}
              className="w-full text-left"
            >
              <div className="flex justify-between items-center border-b border-red-50 p-2 mb-1">
                <div className="flex flex-col">
                  <span className="text-red-300 text-sm">{formatRange()}</span>
                </div>
              </div>
            </button>

            <SalaryPopup
              open={showSalaryPopup}
              minValue={minSalary}
              maxValue={maxSalary}
              onClose={() => setShowSalaryPopup(false)}
              onChange={(min, max) => {
                setMinSalary(min);
                setMaxSalary(max);
              }}
            />
          </div>
          { lock && <LockKeyhole className="size-5 text-gray-400" />}
        </div>
        
      </div>
      
    </div>
  );
}
