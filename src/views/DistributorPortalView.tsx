import React, { useState } from 'react';
import {
  User,
  TrendingUp,
  Users,
  ShoppingBag,
  Copy,
  Check,
  Award,
  ArrowUpRight,
  Package,
  Calendar,
  ShieldCheck,
  LogOut,
  ExternalLink
} from 'lucide-react';
import { DistributorProfile, Product } from '../types';

interface DistributorPortalViewProps {
  initialProfile: DistributorProfile;
  products: Product[];
  onOpenProductModal: (product: Product) => void;
  onOpenCompliance: () => void;
}

export const DistributorPortalView: React.FC<DistributorPortalViewProps> = ({
  initialProfile,
  products,
  onOpenProductModal,
  onOpenCompliance
}) => {
  const [profile, setProfile] = useState<DistributorProfile>(initialProfile);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'team'>('overview');
  const [selectedDemoRank, setSelectedDemoRank] = useState<'Gold' | 'Silver' | 'Distributor'>('Gold');

  const handleCopyLink = () => {
    navigator.clipboard.writeText(profile.replicatedLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleSwitchProfile = (rankChoice: 'Gold' | 'Silver' | 'Distributor') => {
    setSelectedDemoRank(rankChoice);
    if (rankChoice === 'Gold') {
      setProfile({
        ...initialProfile,
        name: 'Priya Sharma',
        distributorCode: 'VN-IND-8491',
        rank: 'Gold',
        currentMonthRetailSales: 48500,
        currentMonthTeamVolume: 82400,
        sponsorCount: 8,
        estimatedEarnings: 18740,
        nextRankTarget: 200000,
      });
    } else if (rankChoice === 'Silver') {
      setProfile({
        ...initialProfile,
        name: 'Aarav Patel',
        distributorCode: 'VN-IND-7320',
        rank: 'Silver',
        currentMonthRetailSales: 26000,
        currentMonthTeamVolume: 34500,
        sponsorCount: 4,
        estimatedEarnings: 8250,
        nextRankTarget: 75000,
      });
    } else {
      setProfile({
        ...initialProfile,
        name: 'Meenal Joshi',
        distributorCode: 'VN-IND-9912',
        rank: 'Distributor',
        currentMonthRetailSales: 12500,
        currentMonthTeamVolume: 6000,
        sponsorCount: 1,
        estimatedEarnings: 2800,
        nextRankTarget: 25000,
      });
    }
  };

  const rankProgress = Math.min(
    100,
    Math.round((profile.currentMonthTeamVolume / profile.nextRankTarget) * 100)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Portal Top Bar */}
      <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E3DBD0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[#3B543D] text-white flex items-center justify-center font-serif text-xl font-bold">
            {profile.name[0]}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#233525]">
                {profile.name}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E6EFE7] text-[#2C5E31] border border-[#C2D8C5]">
                {profile.rank} Rank
              </span>
            </div>
            <p className="text-xs text-[#5D705F] mt-0.5">
              Distributor ID: <span className="font-mono-numbers font-medium">{profile.distributorCode}</span> · Joined {profile.joinedDate}
            </p>
          </div>
        </div>

        {/* Demo Profile Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-1 p-1 bg-[#F0EBE3] rounded-xl text-xs">
            <span className="px-2 text-[11px] font-medium text-[#697E6B]">Demo View:</span>
            <button
              onClick={() => handleSwitchProfile('Gold')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                selectedDemoRank === 'Gold' ? 'bg-[#FAF7F2] font-bold text-[#233525] shadow-xs' : 'text-[#596D5B]'
              }`}
            >
              Gold (Priya)
            </button>
            <button
              onClick={() => handleSwitchProfile('Silver')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                selectedDemoRank === 'Silver' ? 'bg-[#FAF7F2] font-bold text-[#233525] shadow-xs' : 'text-[#596D5B]'
              }`}
            >
              Silver (Aarav)
            </button>
            <button
              onClick={() => handleSwitchProfile('Distributor')}
              className={`px-2.5 py-1 rounded-lg cursor-pointer transition-colors ${
                selectedDemoRank === 'Distributor' ? 'bg-[#FAF7F2] font-bold text-[#233525] shadow-xs' : 'text-[#596D5B]'
              }`}
            >
              New (Meenal)
            </button>
          </div>
        </div>
      </div>

      {/* Replicated Storefront URL Card */}
      <div className="bg-[#F2ECE3] border border-[#DDD5C9] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <span className="text-[11px] uppercase tracking-wider text-[#5D705F] font-semibold">
            Your Personal Replicated Storefront Link
          </span>
          <p className="text-xs font-mono-numbers text-[#233525] font-medium break-all">
            {profile.replicatedLink}
          </p>
        </div>

        <button
          onClick={handleCopyLink}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#3B543D] hover:bg-[#2C402E] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer shrink-0 shadow-xs"
        >
          {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedLink ? 'Link Copied!' : 'Copy Share Link'}</span>
        </button>
      </div>

      {/* KPI Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* KPI 1 */}
        <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
          <span className="text-xs font-medium text-[#647966] block">Personal Retail Volume</span>
          <div className="font-mono-numbers text-2xl font-bold text-[#233525]">
            ₹{profile.currentMonthRetailSales.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-[#4F6451] block">
            Direct sales margins: 20%–{profile.rank === 'Platinum' ? '30' : profile.rank === 'Gold' ? '28' : '25'}%
          </span>
        </div>

        {/* KPI 2 */}
        <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
          <span className="text-xs font-medium text-[#647966] block">Team Sales Volume</span>
          <div className="font-mono-numbers text-2xl font-bold text-[#233525]">
            ₹{profile.currentMonthTeamVolume.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-[#4F6451] block">
            From {profile.downlineMembers.length} active registered consultants
          </span>
        </div>

        {/* KPI 3 */}
        <div className="p-5 bg-[#F4EFEB] rounded-2xl border border-[#E5DDD2] space-y-2">
          <span className="text-xs font-medium text-[#647966] block">Active Sponsored Partners</span>
          <div className="font-mono-numbers text-2xl font-bold text-[#233525]">
            {profile.sponsorCount} Consultants
          </div>
          <span className="text-[11px] text-[#4F6451] block">
            5% monthly personal sponsor bonus
          </span>
        </div>

        {/* KPI 4 */}
        <div className="p-5 bg-[#E6EFE7] rounded-2xl border border-[#C6DCB8] space-y-2">
          <span className="text-xs font-semibold text-[#2C5E31] block">
            Est. Monthly Net Payout
          </span>
          <div className="font-mono-numbers text-2xl font-bold text-[#1F4522]">
            ₹{profile.estimatedEarnings.toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-[#3D6B3F] block">
            Direct margin + team bonus + rank bonus
          </span>
        </div>
      </div>

      {/* Rank Ladder Progress Bar */}
      <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E5DDD2] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
          <div>
            <span className="text-[#596D5B] font-medium">Rank Progression: </span>
            <strong className="text-[#233525]">{profile.rank} Rank</strong>
            <span className="text-[#7A8E7C]"> → Next: {profile.rank === 'Gold' ? 'Platinum' : profile.rank === 'Silver' ? 'Gold' : 'Silver'}</span>
          </div>
          <span className="font-mono-numbers text-[#3B543D] font-bold">
            ₹{profile.currentMonthTeamVolume.toLocaleString('en-IN')} / ₹{profile.nextRankTarget.toLocaleString('en-IN')} ({rankProgress}%)
          </span>
        </div>

        <div className="w-full bg-[#E5DDD2] h-2.5 rounded-full overflow-hidden">
          <div
            className="bg-[#3B543D] h-full rounded-full transition-all duration-500"
            style={{ width: `${rankProgress}%` }}
          />
        </div>
        <p className="text-[11px] text-[#718573]">
          Generate ₹{(profile.nextRankTarget - profile.currentMonthTeamVolume).toLocaleString('en-IN')} more in team volume by month-end to qualify for increased overrides and the next leadership bonus.
        </p>
      </div>

      {/* Tabs: Recent Orders vs Downline Team */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-[#E8E2D9] pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
              activeTab === 'overview'
                ? 'bg-[#3B543D] text-white'
                : 'text-[#526654] hover:bg-[#F2ECE4]'
            }`}
          >
            Recent Customer Orders ({profile.recentOrders.length})
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg cursor-pointer transition-colors ${
              activeTab === 'team'
                ? 'bg-[#3B543D] text-white'
                : 'text-[#526654] hover:bg-[#F2ECE4]'
            }`}
          >
            My Downline Team ({profile.downlineMembers.length})
          </button>
        </div>

        {activeTab === 'overview' ? (
          /* Orders Table */
          <div className="bg-[#FAF7F2] border border-[#E5DDD2] rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#EBE4DA] text-[#233525] uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Items Summary</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Fulfillment Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DDD2] text-[#3E5240]">
                  {profile.recentOrders.map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#F4EFEB]/50">
                      <td className="py-3 px-4 font-mono-numbers font-semibold text-[#233525]">
                        {ord.id}
                      </td>
                      <td className="py-3 px-4 font-medium text-[#233525]">{ord.customer}</td>
                      <td className="py-3 px-4 text-[#596D5B]">{ord.itemsSummary}</td>
                      <td className="py-3 px-4 text-[#6F8271]">{ord.date}</td>
                      <td className="py-3 px-4 font-mono-numbers font-bold text-[#233525]">
                        ₹{ord.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                            ord.status === 'Delivered'
                              ? 'bg-[#E4ECE5] text-[#2C5E31]'
                              : ord.status === 'Shipped'
                              ? 'bg-[#E5EEF5] text-[#2B4E6F]'
                              : 'bg-[#F5EFE0] text-[#785E22]'
                          }`}
                        >
                          {ord.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Downline Team Table */
          <div className="bg-[#FAF7F2] border border-[#E5DDD2] rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#EBE4DA] text-[#233525] uppercase tracking-wider font-semibold">
                  <tr>
                    <th className="py-3 px-4">Consultant Name</th>
                    <th className="py-3 px-4">Consultant Code</th>
                    <th className="py-3 px-4">Current Rank</th>
                    <th className="py-3 px-4">Monthly Retail Volume</th>
                    <th className="py-3 px-4">Your 5% Sponsor Bonus</th>
                    <th className="py-3 px-4">Activity</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5DDD2] text-[#3E5240]">
                  {profile.downlineMembers.map((member) => (
                    <tr key={member.code} className="hover:bg-[#F4EFEB]/50">
                      <td className="py-3 px-4 font-semibold text-[#233525]">{member.name}</td>
                      <td className="py-3 px-4 font-mono-numbers text-[#526654]">{member.code}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-md text-[11px] bg-[#EDE7DE] text-[#2C3E2D] font-medium">
                          {member.rank}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono-numbers font-medium text-[#233525]">
                        ₹{member.monthlySales.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4 font-mono-numbers font-semibold text-[#2C5E31]">
                        ₹{Math.round(member.monthlySales * 0.05).toLocaleString('en-IN')}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-[11px] font-medium ${
                            member.activeStatus ? 'text-[#2C5E31]' : 'text-[#8A6538]'
                          }`}
                        >
                          {member.activeStatus ? 'Active & Ordering' : 'Dormant'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Compliance Notice Footer inside portal */}
      <div className="p-4 bg-[#EAE4DC] rounded-xl border border-[#D5CCC0] text-xs text-[#526654] flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#3B543D] shrink-0" />
          <span>
            Compliant with Consumer Protection Direct Selling Rules 2021. Monthly commission statements are subject to standard TDS deduction as per Indian Income Tax guidelines.
          </span>
        </div>
        <button
          onClick={onOpenCompliance}
          className="text-xs font-semibold text-[#233525] underline shrink-0 cursor-pointer"
        >
          Compliance Details
        </button>
      </div>
    </div>
  );
};
