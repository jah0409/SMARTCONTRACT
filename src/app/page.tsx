import { TokenDisplay } from '@/components/TokenDisplay';
import { StakingDashboard } from '@/components/StakingDashboard';
import { TradingHistory } from '@/components/TradingHistory';

export default function Home() {
  return (
    <div className="space-y-6 pb-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Overview of your Web3 portfolio and recent activity.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TokenDisplay />
          <StakingDashboard />
        </div>
        <div className="lg:col-span-1">
          <TradingHistory />
        </div>
      </div>
    </div>
  );
}
