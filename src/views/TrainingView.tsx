import React, { useState } from 'react';
import { Play, Download, CheckCircle, FileText, BookOpen, Clock, ShieldCheck, X } from 'lucide-react';
import { TrainingLesson } from '../types';

interface TrainingViewProps {
  lessons: TrainingLesson[];
  onOpenCompliance: () => void;
}

export const TrainingView: React.FC<TrainingViewProps> = ({ lessons, onOpenCompliance }) => {
  const [selectedLesson, setSelectedLesson] = useState<TrainingLesson | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const handleDownload = (guideName: string) => {
    setDownloadSuccessMessage(`“${guideName}” has been generated for offline study.`);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold tracking-wider uppercase text-[#4D6450]">
          Empowerment & Education
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#233525]">
          VitaNest Consultant Academy
        </h1>
        <p className="text-xs sm:text-sm text-[#526654] leading-relaxed">
          Free, on-demand video masterclasses and compliance study guides for all registered distributors. Master consultative customer care, botanical science, and the Direct Selling Guidelines 2021.
        </p>
      </div>

      {/* Download Alert notification */}
      {downloadSuccessMessage && (
        <div className="p-3 bg-[#E4EEE5] border border-[#C2D6C4] rounded-xl text-xs text-[#285A2D] flex items-center justify-between">
          <span>{downloadSuccessMessage}</span>
          <button onClick={() => setDownloadSuccessMessage(null)} className="cursor-pointer">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Video Masterclasses Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-[#233525]">
            Featured Training Video Modules
          </h2>
          <span className="text-xs text-[#6F8271]">100% Free for All Members</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="p-6 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-4 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[#2C3E2D] font-semibold text-[11px] border border-[#E0D7CB]">
                    {lesson.category}
                  </span>
                  <div className="flex items-center gap-1 text-[#6F8271]">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-mono-numbers">{lesson.duration}</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#233525]">{lesson.title}</h3>
                <p className="text-xs text-[#526654] leading-relaxed">{lesson.description}</p>

                {/* Key Takeaways */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#4E6250] block">
                    What You Will Learn:
                  </span>
                  <ul className="space-y-1">
                    {lesson.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#4F6451]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#3B543D] shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between">
                <button
                  onClick={() => setSelectedLesson(lesson)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video Session</span>
                </button>

                <button
                  onClick={() => handleDownload(lesson.title)}
                  className="p-2 text-[#5A6E5C] hover:text-[#233525] rounded-lg hover:bg-[#EAE4DC] transition-colors cursor-pointer"
                  title="Download Summary PDF"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Reference Guides Strip */}
      <section className="bg-[#EBE5DC] border border-[#DDD5C9] rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#4D6450]">
            Official Documentation
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#233525]">
            Essential Guides & Compliance Handbooks
          </h2>
          <p className="text-xs text-[#526654]">
            Free downloadable PDF manuals to support ethical consultative selling and statutory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D5CCC0] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#3B543D] mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Handbook #1</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-[#233525]">
                Consumer Protection (Direct Selling) Rules 2021 Guide
              </h4>
              <p className="text-[11px] text-[#697E6B] mt-1">
                Full legal breakdown of do’s and don’ts, consumer rights, and anti-pyramid rules.
              </p>
            </div>
            <button
              onClick={() => handleDownload('Direct Selling Rules 2021 Compliance Handbook')}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-[#F5F1E8] hover:bg-[#EAE4D9] border border-[#D5CCC0] text-[#2C3E2D] rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D5CCC0] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#3B543D] mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Handbook #2</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-[#233525]">
                Botanical Science & Ingredient Directory
              </h4>
              <p className="text-[11px] text-[#697E6B] mt-1">
                Every herb, extract ratio, FSSAI registration class, and recommended usage ritual.
              </p>
            </div>
            <button
              onClick={() => handleDownload('Botanical Science & Ingredient Directory')}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-[#F5F1E8] hover:bg-[#EAE4D9] border border-[#D5CCC0] text-[#2C3E2D] rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>

          <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#D5CCC0] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#3B543D] mb-1">
                <FileText className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">Handbook #3</span>
              </div>
              <h4 className="font-serif text-sm font-bold text-[#233525]">
                Consultative Wellness Conversation Scriptbook
              </h4>
              <p className="text-[11px] text-[#697E6B] mt-1">
                How to listen to your customer's health routines without aggressive sales pressure.
              </p>
            </div>
            <button
              onClick={() => handleDownload('Consultative Wellness Conversation Scriptbook')}
              className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-semibold bg-[#F5F1E8] hover:bg-[#EAE4D9] border border-[#D5CCC0] text-[#2C3E2D] rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#F5F1E8] border border-[#E3DBD0] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-[#E8E2D9] flex items-center justify-between bg-[#FAF7F2]">
              <span className="text-xs font-semibold text-[#526654] uppercase tracking-wider">
                {selectedLesson.category} · {selectedLesson.duration}
              </span>
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-1 text-[#5A6D5C] hover:text-[#233525] rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Video Player */}
            <div className="relative aspect-video bg-[#1F2C21] flex items-center justify-center text-white p-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FAF8F5]/20 backdrop-blur-xs flex items-center justify-center mx-auto hover:bg-[#FAF8F5]/30 cursor-pointer transition-all">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold">{selectedLesson.title}</h3>
                  <p className="text-xs text-[#A8C4AA]">Streaming in high-definition 1080p</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-xs text-[#3E5240] leading-relaxed">
                {selectedLesson.description}
              </p>

              <div className="p-3 bg-[#F4EFEB] rounded-xl text-xs space-y-1.5 border border-[#E5DDD2]">
                <span className="font-semibold text-[#233525] block">Key Takeaways Covered:</span>
                <ul className="space-y-1 list-disc pl-4 text-[#526654]">
                  {selectedLesson.keyTakeaways.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="px-4 py-2 text-xs font-semibold bg-[#3B543D] text-white rounded-lg hover:bg-[#2C402E] cursor-pointer"
                >
                  Completed Lesson
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
