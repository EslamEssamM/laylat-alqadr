"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Star,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Share2,
  RefreshCw,
} from "lucide-react";
import prayers from "@/data/prayers"; // Assuming you have a prayers data file

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [completedPrayers, setCompletedPrayers] = useState<number[]>([]);
  const [showEndScreen, setShowEndScreen] = useState(false);

  // Calculate how many prayers to show per page (4 per page)
  const prayersPerPage = 4;
  const totalPages = Math.ceil(prayers.length / prayersPerPage);

  // Get current page prayers
  const getCurrentPagePrayers = () => {
    const startIndex = currentPage * prayersPerPage;
    return prayers.slice(startIndex, startIndex + prayersPerPage);
  };

  // Calculate which prayers have been viewed (for progress bar segments)
  const viewedUpTo = (currentPage + 1) * prayersPerPage;
  const getProgressStatus = (index: number) => {
    const prayerId = index + 1;
    if (completedPrayers.includes(prayerId)) return "completed";
    if (index < viewedUpTo) return "viewed";
    return "upcoming";
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 250, behavior: "smooth" });
    } else {
      // Show end screen when reaching the last page and clicking next
      setShowEndScreen(true);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  };

  const resetApp = () => {
    setCurrentPage(0);
    setCompletedPrayers([]);
    setShowEndScreen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareApp = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "أدعية ليلة القدر",
          text: "مجموعة من أدعية ليلة القدر المباركة",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("تم نسخ الرابط! يمكنك مشاركته الآن");
        })
        .catch((err) => {
          console.error("فشل في نسخ الرابط: ", err);
        });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") previousPage();
      if (e.key === "ArrowLeft") nextPage();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentPage]);

  // Function to check if a prayer has metadata (title, description, virtues)
  const hasMetadata = (prayer: any) => {
    return prayer.title && (prayer.description || prayer.virtues);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16162a] text-right"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-10 pt-8">
          <div className="relative">
            <div className="flex justify-center mb-6">
              <Moon className="h-16 w-16 text-[#c7b446] rotate-12 animate-pulse" />
              <Star className="h-10 w-10 text-[#c7b446] -ml-4 mt-4 animate-bounce" />
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c7b446] to-[#e9d682] mb-4">
              أدعية ليلة القدر
            </h1>
            <p className="text-gray-400 text-xl">ليلة خير من ألف شهر</p>
          </div>
        </div>

        {showEndScreen ? (
          // End Screen
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-center mb-12">
              <Moon className="h-20 w-20 text-[#c7b446] mx-auto mb-6 animate-pulse" />
              <h2 className="text-4xl font-bold text-[#c7b446] mb-6">
                بارك الله فيكم
              </h2>

              <p className="text-xl text-[#c7b446] font-medium mb-12">
                لا تنسونا من صالح الدعاء
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  onClick={shareApp}
                  className="bg-[#c7b446] hover:bg-[#a89838] text-black text-lg px-8 py-4 rounded-full flex items-center justify-center"
                >
                  <Share2 className="ml-2 h-5 w-5" />
                  مشاركة التطبيق
                </Button>
                <Button
                  onClick={resetApp}
                  className="bg-[#252547] hover:bg-[#1e1e3f] text-white border border-[#c7b446]/30 text-lg px-8 py-4 rounded-full flex items-center justify-center"
                >
                  <RefreshCw className="ml-2 h-5 w-5" />
                  البدء من جديد
                </Button>
              </div>
            </div>

            <Card className="bg-[#252547]/50 border-[#c7b446]/20 p-8 max-w-2xl mx-auto">
              <p className="text-xl text-center text-gray-300 leading-relaxed">
                اللهم تقبل منا صالح الأعمال، واجعلنا ممن يقوم ليلة القدر إيماناً
                واحتساباً، واغفر لنا ما تقدم من ذنوبنا وما تأخر.
              </p>
            </Card>
          </div>
        ) : (
          // Regular Content
          <>
            {/* Enhanced Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span className="text-lg font-medium">تقدمك في الأدعية</span>
                <span className="text-lg font-medium">
                  {currentPage + 1} / {totalPages}
                </span>
              </div>
              <div className="h-3 w-full bg-[#1a1a2e] rounded-full overflow-hidden flex">
                {prayers.map((_, index) => {
                  const status = getProgressStatus(index);
                  return (
                    <div
                      key={index}
                      className={`h-full ${
                        status === "completed"
                          ? "bg-[#c7b446]"
                          : status === "viewed"
                          ? "bg-[#c7b446]/40"
                          : "bg-[#252547]"
                      } transition-all duration-300`}
                      style={{ width: `${100 / prayers.length}%` }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Prayer Cards - Vertical Scrolling Layout */}
            <div className="space-y-8 mb-12">
              {getCurrentPagePrayers().map((prayer) =>
                hasMetadata(prayer) ? (
                  // Card with title and metadata
                  <Card
                    key={prayer.id}
                    className="bg-[#252547] border-[#c7b446]/20 p-0 overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300 shadow-lg"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-[#1a1a2e] p-6 md:p-8 md:w-2/3">
                        <p className="text-2xl md:text-3xl mb-4 leading-relaxed text-white font-arabic">
                          {prayer.text}
                        </p>
                      </div>
                      <div className="p-6 md:p-8 md:w-1/3 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-[#c7b446] mb-4 border-r-4 border-[#c7b446] pr-3">
                            {prayer.title}
                          </h2>
                          {prayer.description && (
                            <p className="text-base text-gray-300 mb-4">
                              {prayer.description}
                            </p>
                          )}
                        </div>
                        {prayer.virtues && (
                          <p className="text-gray-400 text-sm italic border-t border-[#c7b446]/20 pt-3">
                            {prayer.virtues}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                ) : (
                  // Alternative card for prayers without title/metadata
                  <Card
                    key={prayer.id}
                    className="bg-gradient-to-br from-[#252547] to-[#1e1e3f] border-[#c7b446]/20 overflow-hidden transform hover:translate-y-[-4px] transition-transform duration-300 shadow-lg"
                  >
                    <div className="p-8 flex flex-col items-center">
                      <div className="mb-6 opacity-20 absolute right-6 top-6">
                        <BookOpen className="h-24 w-24 text-[#c7b446]" />
                      </div>
                      <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <p className="text-3xl md:text-4xl leading-relaxed text-white font-arabic mb-0 py-6">
                          {prayer.text}
                        </p>
                        <div className="mt-6 flex justify-center">
                          <div className="h-1 w-24 bg-[#c7b446]/40 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center sticky bottom-6 bg-[#1a1a2e]/80 backdrop-blur-md p-4 rounded-full shadow-lg">
              <Button
                onClick={previousPage}
                disabled={currentPage === 0}
                className="bg-[#c7b446] hover:bg-[#a89838] text-black text-lg px-8 py-5 rounded-full"
              >
                <ChevronRight className="ml-2 h-5 w-5" />
                السابق
              </Button>
              <div className="text-[#c7b446] font-bold text-lg">
                {currentPage + 1} / {totalPages}
              </div>
              <Button
                onClick={nextPage}
                className="bg-[#c7b446] hover:bg-[#a89838] text-black text-lg px-8 py-5 rounded-full"
              >
                {currentPage === totalPages - 1 ? "إنهاء" : "التالي"}
                <ChevronLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
